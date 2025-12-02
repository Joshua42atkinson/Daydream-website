import re
import os

artifacts_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\client\src\data\artifacts.js"

def update_artifacts(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Regex to find objects
    # We need to replace the linkUrl within the object string
    # This is tricky with regex alone because we need to process each object
    
    # Strategy: Split by "}," again? No, that failed before.
    # Better: Use the same regex to find objects, then replace WITHIN the match object in the original string?
    # Or just iterate and build a new string.
    
    # Let's try to reconstruct the file.
    # We'll find the array content first.
    match = re.search(r"(export const ARTIFACTS\s*=\s*\[)(.*)(\];)", content, re.DOTALL)
    if not match:
        print("Could not find ARTIFACTS array.")
        return

    start_str = match.group(1)
    array_content = match.group(2)
    end_str = match.group(3)
    
    # We will process the array_content
    # We can use sub to replace linkUrl based on the id found in the same block?
    # That's hard.
    
    # Let's parse, modify, and re-serialize? No, that loses formatting/comments.
    
    # Let's use regex substitution with a callback function on the array_content.
    # We match each object \{.*?\}
    
    def replace_link(match):
        obj_str = match.group(0)
        
        # Extract ID
        id_match = re.search(r'["\']?id["\']?\s*:\s*["\'](.*?)["\']', obj_str)
        if not id_match: return obj_str
        
        art_id = id_match.group(1)
        
        # Check if video
        link_match = re.search(r'["\']?linkUrl["\']?\s*:\s*["\'](.*?)["\']', obj_str)
        current_link = link_match.group(1) if link_match else ""
        
        is_video = "youtube.com" in current_link or "vimeo.com" in current_link or "youtu.be" in current_link
        
        if is_video:
            return obj_str
            
        # It's a PDF target
        new_link = f"/assets/docs/{art_id}.pdf"
        
        # Replace linkUrl
        # We use a specific regex for the linkUrl line to preserve indentation
        obj_str = re.sub(r'(["\']?linkUrl["\']?\s*:\s*)(["\'].*?["\'])', f'\\1"{new_link}"', obj_str)
        
        # Update linkText to indicate PDF? Optional, but good.
        # obj_str = re.sub(r'(["\']?linkText["\']?\s*:\s*)(["\'].*?["\'])', f'\\1"View PDF Artifact"', obj_str)
        
        return obj_str

    new_array_content = re.sub(r"\{.*?\}", replace_link, array_content, flags=re.DOTALL)
    
    new_full_content = content.replace(array_content, new_array_content)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_full_content)
    
    print("Updated artifacts.js with PDF links.")

update_artifacts(artifacts_path)
