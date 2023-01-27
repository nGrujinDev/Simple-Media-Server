var HTTP = require("http");
var FS = require("fs");

// Creating the HTTP server.
HTTP.createServer(function(req, res){
    // Check if the front page was requested.
    if(req.url == "/")
    {
        // TEMPORARY!!! Respond to browser with base front page for testing purposes.
        FS.readFile("front/front.html", function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);

// Function for generating the front page HTML.
function gen_front_page()
{
    // Read front page template.
    FS.readFile("front/front.html", function(err, data){
        var tiles; // List of divs to add to the front page template to show up as tiles.

        // Make sure the file is readable.
        if(err)
        {
            // Print error if encountered, and return.
            console.log("Encountered error during front page generation!\nError: " + err);
            return err;
        }
        // Read the media folders for media files.
        FS.readdir("media", function(err, files){

        });
    });
}