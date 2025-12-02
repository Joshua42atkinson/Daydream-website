import re

artifacts_path = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\client\src\data\artifacts.js"

major_ids = [
    "analyzeExistingEmergingTechnologies",
    "assessmentAlignment",
    "designAPlanForDisseminationAndDiffusion",
    "designAndDevelopment",
    "summativeEval",
    "daydream_initiative_challenge_1",
    "gapAnalysis", # Adding this as it seems substantial
    "visionOfChange" # Adding this as it seems substantial
]

def update_artifacts(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Regex to find objects
    # We will iterate through all objects and add the type property
    
    def add_type(match):
        obj_str = match.group(0)
        
        # Extract ID
        id_match = re.search(r'["\']?id["\']?\s*:\s*["\'](.*?)["\']', obj_str)
        if not id_match: return obj_str
        
        art_id = id_match.group(1)
        
        if art_id in major_ids:
            art_type = "major"
        else:
            art_type = "evidence"
            
        # Add type property at the beginning of the object
        # We replace "{" with "{\n        type: '" + art_type + "',"
        # But we need to be careful about indentation.
        
        # Alternatively, add it before "id"
        if 'type:' in obj_str:
            # Already has type, maybe update it?
            obj_str = re.sub(r'type:\s*["\'].*?["\']', f'type: "{art_type}"', obj_str)
        else:
            obj_str = re.sub(r'(["\']?id["\']?\s*:)', f'type: "{art_type}",\n        \\1', obj_str)
            
        return obj_str

    new_array_content = re.sub(r"\{.*?\}", add_type, content, flags=re.DOTALL)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_array_content)
    
    print("Updated artifacts.js with type properties.")

update_artifacts(artifacts_path)
