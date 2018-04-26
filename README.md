1. Test Purpose: This is to test web application ‘Figure 1’ register page works functionally by using automation test tool Selenium.
 
2. Test Web Application name: Figure 1
   URL:'https://app.figure1.com/account/register'

3. Test tools: following tools need to download in the local computer:
    1) GIT: ‘https://git-scm.com/downloads’ using window version
       GIT is a distributed version control system, meaning our local copy of code is a complete version control repository. 
       After download we can use command line 'git --version' to get version to confirm the git if is download successfully.
    2) GitHub: ‘www.github.com’
       GitHub is development platform, to host and review code, and manages projects. 
    3) Visual Studio Code: ‘https://code.visual studio.com/’
       Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud application.
    4) NODE.js: ‘https://nodejs.org/en/’
       Download from and select ‘Other Downloads’, then select ‘Previous Releases’, next select ‘Node.js 7.8.0’ version, then select ‘node-v7.8.0-x64.msi to download.
       Node is a cross-platform JavaScript runtime environment for servers and applications. 
       After download, we can use command line ‘node –v’ to get version to confirm the node if is download successfully.
    5) Selenium Standalone: ‘https://www.npmjs.com/package/selenium-standalone’
       Selenium Standalone is a Server, run the selenium test cases in the remote machine. Use this server to establish a communication channel between browser and the code to start chrome, internet explorer, and Firefox driver for the tests.
    6) npm: is the package manager for the Node JavaScript platform
    7) JAVA: ‘https://java.com/en/download/’
       JAVA is a software platform. 

4. Test procedure:
    1) Start selenium-standalone by using command line at root level:
       a) Find start ‘selenium-standalone’ commands in the website: ‘https://www.npmjs.com/package/selenium-standalone’
       b) Open command line to install and start selenium-standalone by using following commands:
        ‘npm install selenium-standalone –g’   //--don’t using ‘@latest’
        ‘selenium-standalone install’
        ‘selenium-standalone start’
    2) Register a github account at website 'github.com'
    3) Go to github website to search ‘SQAT06’ existing project.
       Using key word instructor name 'IzzatBamieh' to find ‘SQAT06’ project, 
       and then clone ‘SIQAT06’ project code link which remote URL should use.
    4) Clone ‘SQAT06’ project code to your local machine by using command line: 
       ‘git clone  https://github.com/IzzatBamieh/SQAT06.git’. 
        Using command line ‘dir’ to check SQAT06 is cloned successfully 
    6) Using command line ‘cd SQAT06’Enter to enter ‘SQAT06’ folder
       Using command line ‘dir’ to check folder detail
    7) Install npm by using command line for the first time using:
       ‘npm install’
    8) Open Visual Studio Code to open ‘SQAT06’ file by selecting ‘Open Folder’
    9) Select web_basic.js, edit a line code and save it. 
    10) Run JavaScript by using command line ‘node web_basic.js’ to run test case
    11) Once run first line code JavaScript successfully, 
        then edit next line code and run again.     
        Repeat step 9 and step 10 again and again until finished all the code of the test case.
   
This readme is brief introduction what I learnt from class to let you know how is selenium automation test is going.

5. Pushing code to github at your project repository:
 1) Go to github find SQAT06 project:
   Fork copy of IzzatBamieh/SQAT06 to your account.
 2) Clone your account project SQAT06 URL link where store your code.
 3) Use ‘git remote add’ command line to remote adding origin master account:
    ‘git remote add jessica https://github.com/jessicashen66/SQAT06.git’
    Using command line ‘git remote –v’ 
    to confirm if your account is added successfully
 4) Use ‘git add –p’ command line to add modified contents
    in the working tree interactively to the index.
 5) User ‘git commit –m“message” command line to add a message for the commit.
 6) User ‘git push jessica master’ command line to push commits made on your local 
    to a remote repository.  
 7) Go to github your account project repository after git push successfully  
    check Code/Commits, a new pushed commits should be listed.
