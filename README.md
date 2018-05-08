Assignment 1

1.	Test Purpose: This is automation test to test web application ‘Figure 1’ register page
    works functionally by using automation test tool Selenium.

2.	Test Web Application name: Figure 1   

    URL:'https://app.figure1.com/account/register'

3.	Test tools:  For the web application automation test we use Selenium Standalone, WebdriverIO, Cucumber Framework, Chai Framework,         Github, Node.js and Windows OS etc.  

4.	Test procedures:

    1)  Pre-Request: Bellowing open source tools should be downloaded in the local computer:

        i) GIT (v2.16.2 windows.1) : ‘https://git-scm.com/downloads’ 

           GIT is a distributed version control system, meaning our local  copy of code is a complete version control repository.
           After download we can use command 'git --version' to get version to confirm if the git is  download successfully.

        ii) Visual Studio Code 1.22.2: ‘https://code.visual studio.com/’ 

            Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud application.

        iii) NODE.js (v7.8.0): ‘https://nodejs.org/en/’ 

            Select ‘Other Downloads’, then select ‘Previous Releases’, next select ‘Node.js 7.8.0’ version, then select ‘node-v7.8.0-x64.msi to download. 

            Node is a cross-platform JavaScript runtime environment for servers and applications. 
            After download, we can use command ‘node –v’ to get version to chedk the node if is download successfully.

        iv) npm (v4.2.0): is the package manager for the Node JavaScript platform

        v) JAVA (latest version): ‘https://java.com/en/download/’ 
           JAVA is a software platform.

        vi) Chrome: google browser as platform

    2) Clone the code: the steps are as follow:

        i)  Register a new account at github: ‘www.github.com’.

             GitHub is development platform, to host and review code, and manages projects.

        ii) Search ‘SQAT06’ existing project in the github website.

            Using key word instructor name 'IzzatBamieh' to find ‘SQAT06’ project, then clone and copy ‘SIQAT06’ project code link which remote URL should use.

        iii) Open the Command Prompt to clone ‘SQAT06’ project code to your local machine by using command: 

             ‘git clone https://github.com/IzzatBamieh/SQAT06.git’. 

              Using command ‘dir’ to check SQAT06 is cloned successfully

        iv) Using command ‘cd SQAT06’ to enter ‘SQAT06’ folder.

            Using command ‘dir’ to check folder detail.

        v) Open Visual Studio Code to open ‘SQAT06’ folder files to see the     detail.

    3)  Create automation scripts: to test web application feature. 

        i) Web_basic.js: scripts are written which are based with the scenarios.

        ii) write scripts by using Cucumber Framework include following:

            a. Features file: include steps.js, hooks.js, world.js and scenario.feature subfolders.

            b. Scenario.feature: scenarios are written in a simple gherkin language. i.e Given, When & Then

            c. Step.js: scripts are written which are based with the scenarios.

            d. World.js: WebdriverIO, browser, functions etc. are initialized.

            e. hooks.js: After, before functions are initialized.

        iii) Save all the works at all the files.

        iv) Please note if the scenario feature'steps are duplicate whatever give, when and then, only first scenario must to use all steps scripts, all the duplicated steps shouldn't be used for the next scenario, otherwise the test script will be failed
        
    4) Execution of the scripts:

       i) Open command prompt to the root level by using command ‘cd..’

       ii) Start selenium-standalone by using command:

           Selenium Standalone is a Server, run the selenium test cases in the remote machine. Use this server to establish a communication channel between browser and the code to start chrome, internet explorer, and Firefox driver for the tests. 

            a) Find start ‘selenium-standalone’ commands in the website:  

               ‘https://www.npmjs.com/package/selenium-standalone’ 

            b) Open command to start selenium-standalone by using following commands: 

                ‘npm install selenium-standalone –g’  //--don’t using ‘@latest’ 

                ‘selenium-standalone install’         //--able to use selenium in your local machine 

                ‘selenium-standalone start’           //--selenium is ready to use

       iii) Open another command prompt to run test script by using following command:  

            a) Install npm by using command: 

               ‘npm install’ to install entire package (for the first time using)

            b) Run java script web_basic.js by using command: 

               ‘node web_basic.js 

            c) Run test script is better to run line by line, once success then write and run next line script, until all the scripts are run successfully.

            d) Run Cucumber java scripts by using command:

               .\node_modules\.bin\cucumber-js

    5) Pushing test scripts to github under your project repository.

       The steps are as follow: 

       i) Go to github find SQAT06 project under IzzatBamieh, Fork to clone your account link.

       ii) Clone your account SQAT06 URL link where store your code.

       iii)	Use ‘git remote add’ command to remote adding origin master account: 

            ‘git remote add jessica https://github.com/jessicashen66/SQAT06.git’ 

             Using command ‘git remote –v’ to confirm if your account is added successfully

       iv) Use ‘git add –p’ command to add modified contents in the working tree interactively to the index.

       v) Add a message to commit by using command:

          ‘git commit –m“message” 

       vi)	Push commits made on your local to a remote repository by using command:

           ‘git push jessica master’ command to .

       vii)	Go to github your account project repository after git push successfully.

            check Code/Commits, a new pushed commits should be listed 

       viii) When there are some new files created in the local machine visual studio code, use command to add the new files as bellow:

            a) Use command: 'git status' to check the new files

            b) Use command: 'git add "new file name"' to add file so we can push new added files to the github

6. Build Cucumber html Report

    1) Install cucumber report by using command: 

        'npm i cucumber-html-report'

        reference: https://www.npmjs.com/package/cucumber-html-reporter

    2) add to '"cucumber-html-reporter": "4.0.2"' to package.json file

    3) Create a new file name as 'index.js' under SQAT06

    4) copy document to the index.js file

       Document example reference: https://www.npmjs.com/package/cucumber-html-reporter

    5) Create a new folder 'Test' under SQAT06

    6) Create a new folder as Report under Test folder

    7) create a new file as cucumber.json under Test folder

    8) Create a new file as cucumber.html under Test folder

    9) Run command to run cucumber script to the cucumber report:

       'node_modules\.bin\cucumber-js -f json:test\report\cucumber_report.json'

    10) Run command to get test results report: 'node index.js'

        Report will be generated in the new window

    11) Read Report: 
    
        Report will tell how many features and scenarios are run, how many failed features and scenarios  with failed screenshot.

This readme is brief introduction what I learnt from class to let you know how selenium automation test is going.
