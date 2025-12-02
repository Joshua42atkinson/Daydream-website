import zipfile
import re
import os

directory = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\LTD portfolio"

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml').decode('utf-8')
            text = re.sub('<[^>]+>', '', xml_content)
            return text
    except Exception as e:
        return f"Error: {e}"


target_file = r"c:\Users\Trinity\Documents\trinity\ltdatkinson\LTD portfolio\Daydream Technology Badge Content Creation.docx"
print(f"Extracting text from {target_file}...")
text = extract_text(target_file)
with open("daydream_badge_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
print("Text saved to daydream_badge_text.txt")


