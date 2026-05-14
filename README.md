# Important

The projects created with npx create-react-app automatically initializes its own Git repository by default, creating a .git folder.
A .git folder inside a subdirectory (e.g 03-pizza-menu) is already part of a parent Git repository and Git will treat that folder as a "gitlink" (submodule). The files inside the folder (e.g. 03-pizza-menu) will not be tracked or uploaded to your main repository on GitHub.
If you do not fix this, Git will treat that folder as a "gitlink" (submodule), and the files inside 03-pizza-menu will not be tracked or uploaded to your main repository on GitHub.

## How to Fix It (Example using 03-pizza-menu)

To include the folder and its files in your main repository, follow these steps:

### 1. Remove the nested .git folder

Navigate into the 03-pizza-menu folder and delete the hidden .git folder.

Windows (PowerShell): `Remove-Item -Recurse -Force 03-pizza-menu\.git`

### 2. Remove the "gitlink" from the parent index

Tell your main repository to stop treating that folder as a separate entity:
(bash) `git rm --cached 03-pizza-menu`

(Note: Do not put a trailing slash after the folder name.)

### 3. Re-add and commit the files

Now you can add the folder as normal files to your main project:

(bash)
`git add 03-pizza-menu`
`git commit -m "Add pizza-menu files to main repository"`
