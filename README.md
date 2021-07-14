# LlamaDramaBot

## Description

Llamadrama bot is a bot for Twitch streaming run on NodeJS.  The bot utilizies several NPM modules including tmi.js for the Twitch TV connectivity and Streamlabs for posting alerts to a Streamlabs enabled stream.  This bot runs locally, or with a little work, could be deployed using Heroku.  However, no Procfile has been set up in this repository.

For storing secrets such as auth tokens and configurations, environment variables are widely used.  A definition of the current environment variables is below.

## Environment Variables

The following environment variables are used by the LlamaDramaBot

### STREAMLABS_CLIENT_ID

The client id for the stream labs application, that is used for connecting to the stream via Streamlabs to send alerts.  The alerts will pop on the stream  only if the streamer is broadcasting via streamlabs AND has the "alertbox" widget displayed within their current scene.

The client id for the stream labs application, that is used for connecting to the stream via Streamlabs to send alerts.  The alerts will pop on the stream  only if the streamer is broadcasting via streamlabs AND has the "alertbox" widget displayed within their current scene.

To find the Streamlabs Client Secret:

1. Navigate to [https://streamlabs.com/dashboard](https://streamlabs.com/dashboard)
2. Log in to Streamlabs using your account for your stream.  For instance, you can login with your stream's twitch account, if streaming through twitch.
3. On the left hand pane / menu, scroll down to Account, and click  on "Settings" under Account.
4. On the settings page, locate the API Settings tab at the top.
5. If you have already created your application, skip to step 11.
6. Click on "Register an App"
7. Fill out the required fields.  Add your user to the "Whitelist users" field.
8. For redirect URI, you can just use "http://localhost".  You'll need to use this for the Streamlabs JS calls.
9. Click Create.
10. Go back to Account -> Settings -> API Settings.
11. Click on "My Apps" tab under the API Settings tab.
12. Click on "Edit App"
13. Copy the Client Id and the Client Secret into STREAMLABS_CLIENT_ID and STREAMLABS_CLIENT_SECRET environment variables.
14. On Windows, for instance, you can use the command prompt: setx STREAMLABS_CLIENT_ID your_client_id

### STREAMLABS_CLIENT_SECRET

The client secret for the stream labs application, that is used for connecting to the stream via Streamlabs to send alerts.  The alerts will pop on the stream  only if the streamer is broadcasting via streamlabs AND has the "alertbox" widget displayed within their current scene.

To find the Streamlabs Client Secret:

1. Navigate to [https://streamlabs.com/dashboard](https://streamlabs.com/dashboard)
2. Log in to Streamlabs using your account for your stream.  For instance, you can login with your stream's twitch account, if streaming through twitch.
3. On the left hand pane / menu, scroll down to Account, and click  on "Settings" under Account.
4. On the settings page, locate the API Settings tab at the top.
5. If you have already created your application, skip to step 11.
6. Click on "Register an App"
7. Fill out the required fields.  Add your user to the "Whitelist users" field.
8. For redirect URI, you can just use "http://localhost".  You'll need to use this for the Streamlabs JS calls.
9. Click Create.
10. Go back to Account -> Settings -> API Settings.
11. Click on "My Apps" tab under the API Settings tab.
12. Click on "Edit App"
13. Copy the Client Id and the Client Secret into STREAMLABS_CLIENT_ID and STREAMLABS_CLIENT_SECRET environment variables.
14. On Windows, for instance, you can use the command prompt: setx STREAMLABS_CLIENT_ID your_client_id

### STREAMLABS_SCOPES

This environment variable should be set to "alerts.create"

### STREAMLABS_TOKEN

1. Go to streamlabs.com/dashboard and login.
2. Navigate to Accounts -> Settings -> API Settings -> My Apps
3. Click "Edit App" next to your application.
4. Click on "Sample Authentication URL".  This will kick off an authorization flow.  Before clicking  on the approve button, change the scope in the URL to "alerts.create".
5. Click the approve button.
6. This will redirect the page to the "REDIRECT URL / URI" setting in your application.
7. No worries if it's a blank page.
8. In the URL, copy the value of the code parameter.
9. Next, you'll need to request an access token.
10. You can do this with by using CURL: https://dev.streamlabs.com/reference#token-1
11. Copy the "access_token" that's part of the result, and use it for setting your STREAMLABS_TOKEN environment variable: setx STREAMLABS_TOKEN your_access_token

### TWITCH_BOT_AUTH_TOKEN

Navigate to https://twitchtokengenerator.com and click on "Bot Chat Token".  Follow through the flow and copy the "Access Token".  Set the TWITCH_BOT_AUTH_TOKEN environment variable to this access token.

### TWITCH_BOT_USERNAME

Prior to running this bot, it is recommended that you create a separate Twitch / Stream account for this bot.  After doing so, set the TWITCH_BOT_USERNAME environment variable to the bot's username.

## Other Stuff

### Streamlabs Alerts Caveats

As stated before, you will need to add the alertbox to your Streamlabs OBS setup in  order for the alerts to show up.  You can actually test the alerts box out prior to going live with your stream to make sure it's all hunky dory.

### Stats

Stats and Extra Life participant donor information are currently stored in a static JSON file called .stats in the main directory.  This will likely change to a cloud solution, to allow for a more flexible configuration.
