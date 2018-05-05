Assignment 1

1.	Test Purpose: This is automation test to test web application ‘Figure 1’ register page
    works functionally by using automation test tool Selenium.

2.	Test Web Application name: Figure 1 URL:'https://app.figure1.com/account/register'

3.	Test tools:  For the web application automation test we use Selenium Standalone, 
    WebdriverIO, Cucumber Framework, Chai Framework, Github, Node.js and Windows OS etc.  

4.	Test procedures:

    1)  Pre-Request: Bellowing open source tools should be downloaded in the local computer:

        i) GIT (v2.16.2 windows.1) : ‘https://git-scm.com/downloads’ GIT is a distributed version      control system, meaning our local copy of code is a complete version control repository.     After download we can use command 'git --version' to get version to confirm if the git is    download successfully.
        ii) Visual Studio Code 1.22.2: ‘https://code.visual studio.com/’ Visual Studio Code is a        code editor redefined and optimized for building and debugging modern web and cloud          application.
        iii) NODE.js (v7.8.0): ‘https://nodejs.org/en/’ Download from and select ‘Other Downloads’,      then select ‘Previous Releases’, next select ‘Node.js 7.8.0’ version, then select            ‘node-v7.8.0-x64.msi to download. Node is a cross-platform JavaScript runtime                environment for servers and applications. After download, we can use command ‘node –v’       to get version to confirm the node if is download successfully.
        iv) npm (v4.2.0): is the package manager for the Node JavaScript platform
        v) JAVA (latest version): ‘https://java.com/en/download/’ , JAVA is a software platform.
        vi) Chrome: as platform

    2) Clone the code: the steps are as follow:

        i)  Register a new account at github: ‘www.github.com’.
             GitHub is development platform, to host and review code, and manages projects.
        ii) Search ‘SQAT06’ existing project in the github website. Using key word instructor name       'IzzatBamieh' to find ‘SQAT06’ project, and then clone and copy ‘SIQAT06’ project code       link which remote URL should use.
            iii. Open the Command Prompt to clone ‘SQAT06’ project code to your local machine by using command: 
                ‘git clone https://github.com/IzzatBamieh/SQAT06.git’. 
                Using command ‘dir’ to check SQAT06 is cloned successfully
        iii) Using command ‘cd SQAT06’ to enter ‘SQAT06’ folder.
             Using command ‘dir’ to check folder detail.
        v) Open Visual Studio Code to open ‘SQAT06’ folder files to see the detail.

    3)  Create automation scripts: to test web application ‘signup’ feature. 

        i) Web_basic.js: scripts are written which are based with the scenarios.
        ii) Features file: include steps.js, hooks.js, world.js and scenario.feature subfolders.
        iii) Scenario.feature: scenarios are written in a simple gherkin language. 
            i.e Given, When & Then
        iv) Step.js: scripts are written which are based with the scenarios.
        v) World.js: WebdriverIO, browser, functions etc. are initialized.
        vi) hooks.js: After, before functions are initialized.
        vii) Save all the works at all the files.

    4) Execution of the scripts:

       i) Open command prompt to the root level by using command ‘cd..’
       ii) Start selenium-standalone by using command.
           Selenium Standalone is a Server, run the selenium test cases in the remote machine. Use this server to establish a communication channel between browser and the code to start chrome, internet explorer, and Firefox driver for the tests. 
            a) Find start ‘selenium-standalone’ commands in the website:  
               ‘https://www.npmjs.com/package/selenium-standalone’ 
            b) Open command to install and start selenium-standalone by using following commands: 
                ‘npm install selenium-standalone –g’  //--don’t using ‘@latest’ 
                ‘selenium-standalone install’         //--able to use selenium in your local machine 
                ‘selenium-standalone start’           //--selenium is ready to use
       iii) Open another command prompt to run test script by using command:   
       iv) Install npm by using command: 
           ‘npm install’ to install entire package (for the first time using)
       v) Run java script web_basic.js by using command: ‘node web_basic.js 
       vi) Run test script is better to run line by line script, once success then runs next line.       script, until run all the script of the test case to make sure all the scripts are            running successfully.
       vii) When scripts pass then command prompt displays pass or fail and related comments.

    5) Pushing test scripts to github under your project repository, the steps are as follow: 

       i)	Go to github find SQAT06 project: Fork copy of IzzatBamieh/SQAT06 to your account.
       ii)	Clone your account project SQAT06 URL link where store your code.
       iii)	Use ‘git remote add’ command to remote adding origin master account: 
            ‘git remote add jessica https://github.com/jessicashen66/SQAT06.git’ 
             Using command ‘git remote –v’ to confirm if your account is added successfully
       iv)	Use ‘git add –p’ command to add modified contents in the working tree interactively to        the index.
       v)	User ‘git commit –m“message” command to add a message for the commit.
       vi)	User ‘git push jessica master’ command to push commits made on your local to a remote         repository.
       vii)	Go to github your account project repository after git push successfully
            check Code/Commits, a new pushed commits should be listed 

This readme is brief introduction what I learnt from class to let you know how is selenium automation test is going.

