//Bio JSON
var bio = {
	"name": "Josh Boyan",
	"role": "Front-End Developer and JavaScript Padawan",
	"contactInfo": ["(503)804-2556", "joshboyan@yahoo.com", "https://github.com/joshboyan", "Portland, OR"],
	"pictureURL": "images/profile.jpg",
	"welcomeMessage": "",
	"skills": [
	"Setting up development environments in Bash CLI using npm, Bower, Gulp, Git and responsive front-end frameworks.", 
	"Creating accessible and responsive user interfaces with semantic HTML5 and CSS3 from high-fidelity wireframes and user stories.", 
	"Interfacing with APIs using AJAX to create unique web applications", 
	"Creating interactive elements that engage and delight users with CSS3, SVG, Javascript and appropriate libraries.",
	"WordPress custom theme building, child themes and widget creation.",
	"Debugging using developer tools and console.",
	"Asset creation and editing using Adobe creative suite."
	],
	"location": "Portland, OR"

};

//Add bio to Resume


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(HTMLwelcomeMsg);

HTMLmobile = HTMLmobile.replace("%data%", bio.contactInfo[0]);
$("#topContacts").append(HTMLmobile);
$("#footerContacts").append(HTMLmobile);

HTMLemail = HTMLemail.replace("%data%", bio.contactInfo[1]);
$("#topContacts").append(HTMLemail);
$("#footerContacts").append(HTMLemail);

HTMLgithub = HTMLgithub.replace("%data%", bio.contactInfo[2]);
$("#topContacts").append(HTMLgithub);
$("#footerContacts").append(HTMLgithub);

HTMLlocation = HTMLlocation.replace("%data%", bio.location)
$("#header").append(HTMLlocation);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").prepend(HTMLbioPic);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
	for(var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
}
var frameworks = {
	"frameworks": ["Foundation", "WordPress CMS", "Bootstrap"]
}

frameworks.display = function() {
	if (frameworks.frameworks.length > 0) {
		$("#header").append(HTMLframeworksStart);
		for(var framework in frameworks.frameworks) {
			var formattedFrameworks = HTMLframework.replace("%data%", frameworks.frameworks[framework]);
			$("#frameworks").append(formattedFrameworks);
		}
	}
}

frameworks.display();

var libraries = {
	"libraries": ["jQuery", "Node", "Bower", "Modernizr", "React", "Ember", "D3"]
}

libraries.display = function() {
	if (libraries.libraries.length > 0) {
		$("#header").append(HTMLlibrariesStart);
		for(var library in libraries.libraries) {
			var formattedLibraries = HTMLlibrary.replace("%data%", libraries.libraries[library]);
			$("#libraries").append(formattedLibraries);
		}
	}
}

libraries.display();


var languages = {
	"languages": ["HTML5", "CSS3", "JavaScript", "SVG", "PHP5"]
}

languages.display = function() {
	if (languages.languages.length > 0) {
		$("#header").append(HTMLlanguagesStart);
		for(var language in languages.languages) {
			var formattedLanguage = HTMLlanguage.replace("%data%", languages.languages[language]);
			$("#languages").append(formattedLanguage);
		}
	}
}

languages.display();

//Work JSON
var work = {
	"jobs": [
	{
	"position": "Web Designer",
	"employer": "JBoyan Designs",
	"years": "2015-2017",
	"city": "Portland, OR",
	"duties":["Creating custom web based business solutions for small business clients."]
	},
	{
	"position": "Sous Chef",
	"employer": "Deschutes Brewery and Public House",
	"years": "2014-2015",
	"city": "Portland, OR",
	"duties":["Leading and training Deschutes culinary team in high volume environment."]
	},
	{
	"position": "Executive Chef",
	"employer": "Titan Restaurant Group",
	"years": "2012-2014",
	"city": "Portland, OR",
	"duties":["Creating ordering and service systems while training junior team members."]
	}
	]
};

//Work object method
work.display = function() {	
for (var item in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);	
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].position);
	$(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
	var formattedYears = HTMLworkDates.replace("%data%", work.jobs[item].years);
	$(".work-entry:last").append(formattedYears);	
	var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[item].city);
	$(".work-entry:last").append(formattedCity);
	var formattedDuties = HTMLworkDescription.replace("%data%", work.jobs[item].duties);
	$(".work-entry:last").append(formattedDuties);
}
}
work.display();

//Projects Object
var projects = { 
	"websites": [
	{
	"title": "",
	"dates": "",
	"description":  "",
	"image":  ""
},
    {
	"title": "",
	"dates": "",
	"description":  "",
	"image":  ""
	}
  ]
}

//Projects object method to add projects to resume
projects.display = function() {
	if(projects.websites[0].title.length > 0) {
	for (var website in projects.websites) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.websites[website].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.websites[website].title);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.websites[website].title);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.websites[website].title);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

}

//Projects object method call
projects.display();


//Education object
var education = { 
	"schools": [
	{
	"school": "Portland Community College",
	"degree": "AAS",
	"years": "2015-2017",
	"city":  "Portland, OR",
	"major": "Web Design and Development"
},
    {
	"school": "Free Code Camp",
	"degree": "Certificate",
	"years": "2016-2017",
	"city":  "Portland, OR",
	"major": "Front-End Development"
	}
  ]
}

//Display method for the education object
education.display = function() {
	if (education.schools[0].school.length > 0) {
		for(var school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
			$(".education-entry:last").append(formattedYears);
			var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
			$(".education-entry:last").append(formattedCity);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
	}
}

//Education objects method call 
education.display();

//Object with additional places I've lived
var livedIn = {
	"places": [
	{	"city": "Manahawkin, NJ"	},
	{	"city": "Tampa, FL"  	}
  	
  ]
}


$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  //console.log("x location: " + event.pageX + "; y location: " + event.pageY);
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(str) {
	str = str.toLowerCase().split(" ");
	var first = str[0].slice(0,1).toUpperCase().concat(str[0].slice(1));
	var last =  str[1].toUpperCase();
	return first + " " + last;

}

inName("josh boyan");
$("#main").append(internationalizeButton);

