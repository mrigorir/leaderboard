# Leaderboard

> The Leaderboard app displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

## What was build in this part of the project:

 - Use Webpack dependencies for better JS and CSS file performance.

 - Bootstrap 5.

 - Font awesome 5.

 - API features.

## Image Preview
![Screenshot Main Page](./src/img/capture.jpg)

## Getting Started

To get a local copy up and running follow these simple example steps:

- On the project, GitHub page, navigate to the [main page of the repository](https://github.com/mrigorir/leaderboard/)

- Click on a button named `Code`

- Copy the project URL as displayed on HTTPS tab

- If you're running Windows Operating System, open your command prompt. On Linux, Open your terminal

- Change the current working directory to the location where you want the cloned directory to be made. Leave as it is if the current location is where you want the project to be.

- Type `git clone`, and then paste the URL you copied in Step 3.<br>

  `$ git clone https://github.com/mrigorir/leaderboard.git` <em>Press Enter key</em><br>

- Your local copy will be created.

- Please note that you must have Git installed on your PC, this can be done [here](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

- After you get the project aiming to the desired directory, you need now to install ruby globally and follow the steps below:


### Github Actions

To make sure the linters' checks using Github Actions work properly, you should follow the next steps:

1. On your recently forked repo, enable the GitHub Actions in the Actions tab.
   
2. Create the `feature/branch` and push.
   
3. Start working on your milestone as usual.
   
4. Open a PR from the `feature/branch` when your work is done.

### Usage 

- Make sure you have npm and node installed in your terminal.

- I recommend the use of VS code as a code editor, but you can use whatever you want.

- Run in your terminal `npm run server` to see webpack html file in action.

- Run `npm install express` in case you get the error after running the server.

- To create a new game, you need to request for [a unique ID](https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/) to serve as a container for 
  
  names and scores, and pass it any name you want, e.g: Marco's game.

- For this project, an ID is already been used.

- To get/add scores from the API, use this [url](https://us-central1-js-capstone-backend.cloudfunctions.net/api) followed by: /games/your_created_id/scores/
  
- To set new scores into the API, just put your name and a score number in the form, then hit the paper plane button.

- Look at the leaderboard's info and check if your info shows up.

## Author

???? **Marco Parra**

- GitHub: [@mrigorir](https://github.com/mrigorir)
- Twitter: [@marcoparra311](https://twitter.com/marcoparra311)
- LinkedIn: [@marco-alonso-parra](https://www.linkedin.com/in/marco-alonso-parra/)

## ???? Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mrigorir/leaderboard/issues).


## Show your support

Give a ?????? if you like this project!


## Acknowledgments

- Microverse Activities


## ???? License

This project is [MIT](https://github.com/mrigorir/leaderboard/blob/main/LICENSE) licensed.
