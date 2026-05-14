# Important

The projects created with npx create-react-app automatically initializes its own Git repository by default, creating a .git folder.

A .git folder inside a subdirectory (e.g 03-pizza-menu) is already part of a parent Git repository and Git will treat that folder as a "gitlink" (submodule). The files inside the folder (e.g. 03-pizza-menu) will not be tracked or uploaded to your main repository on GitHub.

If you do not fix this, Git will treat that folder as a "gitlink" (submodule), and the files inside 03-pizza-menu will not be tracked or uploaded to your main repository on GitHub.

## How to Fix It

To include the folder and its files in your main repository (in this case, **Udemy**), follow these steps:

### 1. Remove the nested .git folder

Open Git Bash. Navigate into the [folder/subfolder] and delete the hidden .git folder.

`cd [folder/subfolder]`

`rm -rf .git`

### 2. Re-add and commit the files

Open another Git Bash bar.
Now you can add the folder as normal files to your main project:

`git add [subfolder]`

`git commit -m "Add [project] files to main repository"`
