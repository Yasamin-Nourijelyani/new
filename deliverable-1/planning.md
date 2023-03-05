# Balance AI iOS/The Digital Dream Team
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?
* The product is a web app to interactively test the basic literacy of kindergarten students in the 7 tasks including Oral interaction, Listening, Rapid naming, Spelling, Phonological awareness, Rhyming, and Storytelling.  
* The problem being solves is to create a standardized evaluation tool that can quickly (within one minute) provide test scores for the teachers and parents to assess the students' abilities.
* This is an evaluation tool that is appealing for students to use to accurately assess their knowledge in the 7 tasks.
* Our partner is the BalanceAI team at the University of Toronto, developed in Dr. Eunice Jang lab.
* We are extending the web application for developing the 7 tasks for the students in this website: https://discovery.balanceai.ca/   
* The application will be used to test student knowledge in stages. For example, in entry to kindergarten, students will be tested if they have basic knowledge such as holding a book, etc.
* The software will test the progress of the students every 6 months, and at the graduation of the student from kindergarten. Students at higher levels can be asked to spell basic words given a picture. 
 * The Mockup of the product can be found [here](./Demo.pdf)


#### Q2: Who are your target users?

 * The target audience for BalanceAI Discovery are students at the age of 3 to 6 years old, in the stage of entering pre-kindergarten up to graduating from the kindergarten level. These users are part of a classroom that tests students at each level during their kindergarten journey.
 * Please see the user persona [here](./UserPersona.png) called Grace.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Kindergartener students will choose our product because of our kids-friendly UI and extremely visual, engaging approach in presenting assessments. Guardians, and teachers will choose our product as it will help them assess the literacy capacity of the child. They will receive information, for e.g.: “how well a child is able to associate a picture to the correct word”, “how well a child is able to understand a story when being read to”, etc. through the scoring systems of the assessments in our product. 

Our partners, OISE, have identified that the currently standard literacy assessment in place for Ontario School is based on a static model and only provides limited amount of information about students literacy (i.e., it’s not a great marker in assessing students’ literacy). OISE aims to alleviate this problem with BalanceAI and our product will provide assessments that will be used by the students using BalanceAI. With our product, teachers and guardians will receive a more accurate literacy assessment of their child and discover any literacy difficulties a child might be going through more quickly. 


#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

The user stories is separately attached in user_stories_BalanceAI.pdf under Deliverable-1 directory. 
It can be found [here](./user_stories.pdf)

In the meeting, we led our partners through our user stories, and we received thier feedback next day:
![image](https://user-images.githubusercontent.com/90577188/216703724-0aaaed7c-8c3e-4e51-b79a-a09bb4c59138.png)
<img width="628" alt="image" src="https://user-images.githubusercontent.com/90577188/216704834-5b4b0519-4083-48c9-8371-e27e77879bf2.png">




#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

 * The software is web based and is built using React on other platforms. It will be used along with HTML and Javascript. After completion, the software will be tested by select teachers before being made available to the public.

 * Tasks are run in various places, and the architecture is designed in a way so that the runtime is optimized. Several third-party applications are used, such as Google Firebase for data storage, as well as Google Cloud for computation and infrastructure. In addition, the software uses one traditional server for simplicity.   

 * Recordings will be sent to the backend, where it is transcribed using ASR (Automatic Speech Recognition). Performance is then graded using AI, following a predetermined rubric.


----
## Intellectual Property Confidentiality Agreement 
* The product that we will be developing include tasks that are common, and publicly available. Hence, there is likely nothing confidential that our team will be working on. 
Confidentiality comes from grading metrics (which we are not implementing).
Hence, there is no IP ownership of confidentiality on our part.
This will be confirmed with Eunice (Product Owner) as the project progresses. 

----

## Teamwork Details

#### Q6: Have you met with your team?
* We played 2 truths 1 lie in a Discord voice meeting. Here is a [screenshot.](./2TruthsOneLie.png)
* We learned the following facts about some of our team members:
  * Fariha plays the harmonium
  * Sanjana hates chocolate
  * Yasamin is allergic to chocolate

#### Q7: What are the roles & responsibilities on the team?
|        Role      |   Responsibilities      |
|------------------|-------------------------|
| Frontend Developer| Develop the user interface of the product.|
|Backend Developer|Develop backend logic or database of the product.|
|Full-stack Developer|Develop both frontend and backend components.|
|Product manager|Understand the partner’s needs and plan the development of the product.|
|Dedicated Partner Liaison|Communicate with the partner.|

|        Member      |   Roles and Responsibilities      |     Why                |
|------------------|-------------------------|-------------------------|
| Leo | Frontend Developer: will work on the “tasks” and the scoring system and AI Buddy instruction if needed | He is interested in learning how a industrial project is completed especially how front end will connect to backend and database to develop the project.|
| Ivan |Front end Developer: will work on the “tasks” and dashboard for the project |He’s interested in gaining front-end experience and also in working on the interactive components of the project.|
| Yasamin | Product manager and Full-Stack developer: will work on the database, authentication, and “tasks”.|She is interested in learning and helping in frontend and has experience with backend and database development. Additionally, she will allocate tasks and help organize the team structure to develop the project.|
| Saad | Backend/DevOps developer: will work on the database and the scoring system and AI Buddy instruction if needed. |He is interested in learning/mastering backend technologies like Django, Node, Express etc. and creating a robust database that allows for efficient transactions. Additionally, he’s interested in enhancing his practical ML skills utilizing prior experience.|
| Fariha | Backend developer: will work on authentication and the database and “tasks”.|She is interested in doing the backend component of the project, but also interested in gaining frontend experience.|
| Sanjana | Frontend developer and dedicated partner liaison: will work on authentication and the “tasks”.| She has previous experience with frontend and is interested to challenge herself with the task management system.|
| Jolie| Frontend developer: will work on the dashboard and also has been doing meeting minutes.| She is interested in learning frontend development, web design, and gaining frontend experience.|



#### Q8: How will you work as a team?

* As a team, we meet on Discord or Zoom every weekend, where we catch up and make plans and agreements.
* We’ve arranged to meet with our partner every Thursday on Zoom. In our first meeting with our partner, we learned about the overall objective of the project and discussed an MVP. We also asked about tech stacks we will use, how we can collaborate with other members of the project, and IP requirements.
* In our second meeting, we showcased our mockup, user stories, and database schema, and received feedback from the partner. We also discussed what parts of the product we should focus on for an MVP. We also discussed possible technologies to use.
  
#### Q9: How will you organize your team?

* To keep track of what needs to be done, we assign jobs to a to-do list on Discord. Here is an [example.](./todo_example.png)
* We are also considering using Asana or Jira to manage our tasks going forward. We prioritize tasks by deadline and feasibility. We divide work that can be done individually between members. Sometimes a person will be given a specific task if they prefer it. For work that must be done collaboratively, we get it done collaboratively. In the future, tasks will be assigned to the relevant sub-team. To finish work, we plan it out, assign it to sub-teams, and then have it checked by the rest of the team.


#### Q10: What are the rules regarding how your team works?

* We communicate over Discord regularly, and will have voice meetings at least every Saturday on Discord or Zoom.
* We communicate with our partner by email and also meet with them every Thursday on Zoom.
* The tasks are allocated every few weeks with an internal deadline for each activity. Additionally, Internal meetings are set with all group members to catch up and ensure all tasks are accomplished that week. Meeting times are agreed upon in advance, so attendance is expected, unless notified. All team members are held accountable to contribute to the project since all members are required to provide updates for their tasks. We will also track members’ progress on our discord channel.
* We will contact the member and will ask them to contribute. If that does not work, we will have a meeting with them along with the rest of the team to talk about their involvement and see if there are any issues such as stressful events preventing them from completing their tasks. If so, we will try to help with their tasks as a group by dividing the tasks, and also direct them to services in order to help them. If the member is not responsive at all, we will ask the teaching team to get involved.

