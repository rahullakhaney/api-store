# Collect information from any Facebook event

Get to know any Facebook member that shares the same interests as you. Use any Facebook event you have access to and gather:

1. Facebook profile links
2. Names
3. Profile pictures
4. If they're going, are interested or invited to that event

# What will you need? ⚙️ 

- **Session cookies c\_user and xs**: Your _c\_user_ and _xs_ session cookies from Facebook.
- **Spreadsheet URL**: The link of a Google Spreadsheet (or CSV) with Facebook event URLs in it, OR the direct link of a single Facebook event.

_(**You already have all that?** Click straight away on **"Use this API"**)_


# What you need to do.
## 1. Create an account on Phantombuster.com 💻
If you haven't already, create a **FREE** account on [Phantombuster](https://phantombuster.com/register). Our service will browse the web for you. It’s a website automator which runs in the cloud. Once done we'll follow up.


## 2. Use this API on your account.👌
We cooked up in our lab a script with first-class attention.
Now that you're connected to Phantombuster, Click on the following button (it will open a new tab).

<center><button type="button" class="btn btn-warning callToAction" onclick="useThisApi()">USE THIS API!</button></center>


## 3. Click on Configure me!
You'll now see the 3 configuration dots blinking. Click on them.

<center>![](https://phantombuster.imgix.net/api-store/facebook_group_extractor/config.png)</center>


## 4. Facebook authentication 🔑 { argument }
Because the script will manipulate Facebook for you, it needs to be logged on your Facebook account. For that you just need to copy paste two session cookies in the script argument:
* Using Chrome, go to your Facebook homepage and open the inspector  
→ Right click anywhere on the page and select “Inspect” ![](https://phantombuster.imgix.net/api-store/Inspect+browser.png)  
→ <kbd>CMD</kbd>+<kbd>OPT</kbd>+<kbd>i</kbd> on macOS  
or  
→ <kbd>F12</kbd> or <kbd>CTRL</kbd>+<kbd>MAJ</kbd>+<kbd>i</kbd> on Windows

* Locate the “Application” tab

<center>![](https://phantombuster.imgix.net/api-store/li_at+1.png)</center>

* Select “Cookies” > “http://www.facebook.com” on the left menu.

<center>![](https://phantombuster.imgix.net/api-store/facebook_group_extractor/cookiesFB.png)</center>

* Locate the “c_user” cookie.

<center>![](https://phantombuster.imgix.net/api-store/facebook_group_extractor/c_userCookie.png)</center/>

* Copy what’s under “Value” (**Double click** on it then <kbd>Ctrl</kbd>+<kbd>C</kbd>) and paste it into your script _Argument_)

* Do the same for the “xs” cookie.

<center>![](https://phantombuster.imgix.net/api-store/facebook_group_extractor/xsCookie.png)</center/>

_// How to access your cookies with <a href="https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector" target="_blank">Firefox</a> and <a href="https://www.macobserver.com/tmo/article/see_full_cookie_details_in_safari_5.1" target="_blank">Safari</a>//_


## 5. Add a Google Spreadsheet 📑
Below your session cookies you’ll find Spreadsheet URL.

Add in the Spreadsheet URL textbox the link of a Google spreadsheet with this same format **(Share option must be OPEN)**.

Your spreadsheet should contain a list of Facebook Event URLs (**one link per row**).

You can specify the name of the column that contains the profile links. Simply enter the column name in the next text field.
You can also enter a single Facebook event URL directly in the field.


# Click on Launch & Enjoy!
It’s done! All that is left to do is to click on "launch" to try your script!

<center>![](https://phantombuster.imgix.net/api-store/launch.JPG)</center>


# Limits

Please be aware that this API will manipulate your own account on your behalf.

Since Phantombuster's servers are located on the west coast of the USA, Facebook might to consider those login attempts as unusual activities. It's likely that they'll then temporarily lock your account and ask you to confirm your login.

In order to use the Facebook APIs to their max potential, we recommend [using a proxy](https://phantombuster.com/proxies) close to you.