import os


for i in range(1, 90):
    # Directory
    directory = f"form-{i}"
    
    # Parent Directory path
    parent_dir = "C:/Users/mahmo/OneDrive/Documents/tiqdr-copy-main/testPages/forms"
    
    # Path
    path = os.path.join(parent_dir, directory)
    
    # Create the directory
    # 'GeeksForGeeks' in
    # '/home / User / Documents'
    os.mkdir(path)