#### Requirements:
- Node.js (npm)
- Ruby (RubyGems)

Once you have node and ruby installed, open up a terminal window and navigate to your project directory. Run these commands:

```shell
gem install bundler
bundle install
npm install
npm install -g gulp
```

You should now be able to run the single command `gulp` and it will start the BrowserSync server and launch your default web browser. Gulp watches for changes in your SASS and compiles it for you.