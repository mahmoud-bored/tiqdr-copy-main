import os


for i in range(12, 37):
    # Directory
    directory = f"exam-version-{i}"
    
    # Parent Directory path
    parent_dir = "C:/Users/mahmo/OneDrive/Documents/tiqdr-copy-main/testPages/versions"
    
    # Path
    path = os.path.join(parent_dir, directory)
    
    # Create the directory
    # 'GeeksForGeeks' in
    # '/home / User / Documents'
    os.mkdir(path)