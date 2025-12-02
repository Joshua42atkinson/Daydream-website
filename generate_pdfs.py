import json
import re
import os
from fpdf import FPDF

# Paths
artifacts_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\client\src\data\artifacts.js"
master_bible_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\master_bible_text.txt"
output_dir = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\client\public\assets\docs"

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# 1. Parse artifacts.js
def load_artifacts(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the array content using regex
    # Matches `export const ARTIFACTS = [` and captures everything until the last `];`
    match = re.search(r"export const ARTIFACTS\s*=\s*\[(.*)\];", content, re.DOTALL)
    if not match:
        print("Could not find ARTIFACTS array. Checking file content snippet:")
        print(content[:200]) # Debug
        return []
    
    array_content = match.group(1)
    
    # Use regex to find all objects { ... }
    # We look for { followed by content until } that is followed by comma or end of list
    # We use a non-greedy match for content
    object_matches = re.finditer(r"\{.*?\}", array_content, re.DOTALL)
    
    artifacts = []
    
    for match in object_matches:
        item = match.group(0)
        
        # Extract fields
        obj = {}
        fields = ["id", "title", "challenge", "category", "summary", "reflection", "linkUrl", "linkText"]
        for field in fields:
            # Regex to find "key": "value" or key: "value"
            # Handle multiline values
            # Matches "field": or field: followed by quote, value, quote
            field_match = re.search(rf'["\']?{field}["\']?\s*:\s*([`\'"])(.*?)\1', item, re.DOTALL)
            if field_match:
                obj[field] = field_match.group(2)
            else:
                obj[field] = ""
        
        if obj.get("id"):
            artifacts.append(obj)
            
    return artifacts

# 2. Load Master Bible Text
def load_master_bible(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

# 3. Extract Content for Tech Badges
def get_bible_content(text, artifact_id):
    # Mapping logic
    mapping = {
        "basic_tools_challenge_1": ("Challenge 1: Reflective Writing (Blog)", "Challenge 2: Screencast Tool"),
        "basic_tools_challenge_2": ("Challenge 2: Screencast Tool", "Challenge 3: Cloud Storage and Sharing"),
        "basic_tools_challenge_3": ("Challenge 3: Cloud Storage and Sharing", "Part 3: Drafting 'Research Tools' Badge Content"),
        
        "research_tools_challenge_1": ("Challenge 1: Notetaking Tools", "Challenge 2: Social Bookmarking Tools"),
        "research_tools_challenge_2": ("Challenge 2: Social Bookmarking Tools", "Challenge 3: Mindmapping & Brainstorming Tools"),
        "research_tools_challenge_3": ("Challenge 3: Mindmapping & Brainstorming Tools", "Part 4: Drafting 'Presentation Tools' Badge Content"),
        
        "presentation_tools_challenge_1": ("Challenge 1: Presentation Design", "Challenge 2: Simple Presentation Development"),
        "presentation_tools_challenge_2": ("Challenge 2: Simple Presentation Development", "Challenge 3: Adapted/Animated Presentation"),
        "presentation_tools_challenge_3": ("Challenge 3: Adapted/Animated Presentation", "Challenge 4: Resource Creation"),
        "presentation_tools_challenge_4": ("Challenge 4: Resource Creation", "Part 5: Final Review & Submission Strategy"),
        
        "daydream_initiative_challenge_1": ("Daydream Technology Badge Content Creation", None) # To end of file
    }
    
    if artifact_id not in mapping:
        return None
        
    start_marker, end_marker = mapping[artifact_id]
    
    start_idx = text.find(start_marker)
    if start_idx == -1:
        return None
        
    if end_marker:
        end_idx = text.find(end_marker, start_idx)
        if end_idx == -1:
            return text[start_idx:] # Fallback
        return text[start_idx:end_idx].strip()
    else:
        return text[start_idx:].strip()

# 4. Generate PDF
class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, 'Ask Pete / Daydream Initiative', 0, 1, 'R')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def create_pdf(artifact, content, output_path):
    pdf = PDF()
    pdf.add_page()
    
    # Title
    pdf.set_font("Arial", "B", 16)
    pdf.multi_cell(0, 10, artifact.get("title", "Untitled"))
    pdf.ln(5)
    
    # Challenge
    pdf.set_font("Arial", "I", 12)
    pdf.multi_cell(0, 10, artifact.get("challenge", ""))
    pdf.ln(10)
    
    # Content (from Master Bible or Summary/Reflection)
    pdf.set_font("Arial", "", 11)
    
    # Clean up content (remove HTML tags if any, though extraction removed most)
    # Also handle newlines
    content = content.replace("\\n", "\n").replace("\\'", "'").replace('\\"', '"')
    
    # If content is just summary/reflection, label them
    if "Summary:" not in content and "Reflection:" not in content and "Drafted Artifact Description:" not in content:
         # This is likely the fallback case
         pass
    
    # Write content
    # FPDF has trouble with some unicode, so we encode/decode to latin-1 or replace
    try:
        pdf.multi_cell(0, 6, content.encode('latin-1', 'replace').decode('latin-1'))
    except Exception as e:
        print(f"Error writing content for {artifact.get('id')}: {e}")
        pdf.multi_cell(0, 6, "Error rendering content.")

    pdf.output(output_path)

# Main Execution
artifacts = load_artifacts(artifacts_path)
bible_text = load_master_bible(master_bible_path)

print(f"Found {len(artifacts)} artifacts.")

generated_files = {}

for art in artifacts:
    # Determine if we should generate a PDF
    # Generate if it's NOT a video link (youtube/vimeo)
    link = art.get("linkUrl", "")
    is_video = "youtube.com" in link or "vimeo.com" in link or "youtu.be" in link
    
    if is_video:
        continue
        
    # It's a document candidate
    art_id = art.get("id")
    filename = f"{art_id}.pdf"
    filepath = os.path.join(output_dir, filename)
    
    # Get content
    bible_content = get_bible_content(bible_text, art_id)
    
    if bible_content:
        final_content = bible_content
    else:
        # Fallback: Use Summary and Reflection
        summary = art.get("summary", "")
        reflection = art.get("reflection", "")
        # Strip HTML from reflection
        reflection = re.sub('<[^>]+>', '', reflection)
        final_content = f"Summary:\n{summary}\n\nReflection:\n{reflection}"
    
    create_pdf(art, final_content, filepath)
    generated_files[art_id] = f"/assets/docs/{filename}"
    print(f"Generated PDF for {art_id}")

# Output mapping for manual update (or I could automate it)
print("\nGenerated File Mapping:")
print(json.dumps(generated_files, indent=2))
