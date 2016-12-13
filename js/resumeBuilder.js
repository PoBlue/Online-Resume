/*
This is empty on purpose! Your code to build the resume will go here.
*/
var dataPlaceholder = "%data%"

var Resume = {
};

var bio = {
	"name": "MoMo",
	"role": "Full Stack Developer",
	"bioPic": "images/portfolio.jpg",
	"welcomeMessage": "Stay hungry, Stay foolish",
	"contacts": {
		"mobile": "12345678",
		"email": "250299430@qq.com",
		"GitHub": "https://github.com/PoBlue",
		"blog": "http://www.jianshu.com/users/81f7dcc6a98e/latest_articles",
		"location": "广东"
	},
	"skills": ["Android Develop", "iOS Develop", "Front-End Develop", "English", "Chinese"],

	display : function(){
		var formatedName = HTMLheaderName.replace(dataPlaceholder, bio.name);
		var formatedRole = HTMLheaderRole.replace(dataPlaceholder, bio.role);

		$("#header").prepend(formatedName, formatedRole);

		var formatedMobile = HTMLmobile.replace(dataPlaceholder, bio.contacts.mobile);
		var formatedEmail = HTMLemail.replace(dataPlaceholder, bio.contacts.email);
		var formatedGitHub = HTMLgithub.replace(dataPlaceholder, bio.contacts.GitHub);
		var formatedLocation = HTMLlocation.replace(dataPlaceholder, bio.contacts.location);

		$("#topContacts").append(formatedMobile,
			formatedEmail,
			formatedGitHub,
			formatedLocation);
		
		$("#footerContacts").append(formatedMobile,
			formatedEmail,
			formatedGitHub,
			formatedLocation);

		var formatedBioPic = HTMLbioPic.replace(dataPlaceholder, bio.bioPic);
		var formatedWelcomMsg = HTMLwelcomeMsg.replace(dataPlaceholder, bio.welcomeMessage);

		$("#header").append(formatedBioPic, formatedWelcomMsg, HTMLskillsStart);

		bio.skills.forEach(function(skill) {
			var formatedSkill = HTMLskills.replace(dataPlaceholder, skill);
			$("#skills").append(formatedSkill);
		});
	}
};

var work = {

	"jobs": [
		{
			"title": "Developer",
			"employer": "abcCompany",
			"date": "2015-10-13",
			"location": "China",
			"description": "iOS Develop"
		},
		{
			"title": "Developer",
			"employer": "FunnyCompany",
			"date": "2016-10-13",
			"location": "China",
			"description": "Andorid Develop"
		}
	],

  display: function() {
  	work.jobs.forEach(function(job) {
  		var template = $(HTMLworkStart);

  		var formatedEmployer = HTMLworkEmployer.replace(dataPlaceholder, job.employer);
  		var formatedTitle = HTMLworkTitle.replace(dataPlaceholder, job.title);
  		var formatedDates = HTMLworkDates.replace(dataPlaceholder, job.date);
  		var formatedLocation = HTMLworkLocation.replace(dataPlaceholder, job.location);
  		var formatedDescription = HTMLworkDescription.replace(dataPlaceholder, job.description);

  		template.append(formatedEmployer + formatedTitle,
  			formatedDates,
  			formatedLocation,
  			formatedDescription);
  		$("#workExperience").append(template);
  	});
  }
};

var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"date": "2016-12-13",
			"description": "A Resume website",
			"images": "images/comingsoon.jpg"
		},
		{
			"title": "Portfolio Site",
			"date": "2016-12-10",
			"description": "A Portfolio Site",
			"images": "images/comingsoon.jpg"
		}
	],

	display: function() {
		projects.projects.forEach(function(project) {
			var template = $(HTMLprojectStart);

			var formatedTitle = HTMLprojectTitle.replace(dataPlaceholder, project.title);
			var formatedDate = HTMLprojectDates.replace(dataPlaceholder, project.date);
			var formatedDescription = HTMLprojectDescription.replace(dataPlaceholder, project.description);
			var formatedImages = HTMLprojectImage.replace(dataPlaceholder, project.images);

			template.append(formatedTitle,
				formatedDate,
				formatedDescription,
				formatedImages);

			$("#projects").append(template);
		});
	}
};

var education = {
	"schools": [
		{
			"name": "abc school",
			"location": "China",
			"degree": "programmer",
			"majors": "CS",
			"dates": "2012-09-01",
			"url" : "http://abc.com"
		}
	],
	"onlineCourse": [
		{
			"title": "Front-End",
			"school": "Udacity",
			"date": "2016-12-01",
			"url": "http://udacity.com"
		}
	],

	display: function(){
		education.schools.forEach(function(school) {
  		var template = $(HTMLschoolStart);

  		var formatedName = HTMLschoolName.replace(dataPlaceholder, school.name);
  		var formatedDegree = HTMLschoolDegree.replace(dataPlaceholder, school.degree);
  		var formatedDates = HTMLschoolDates.replace(dataPlaceholder, school.dates);
  		var formatedLocation = HTMLworkLocation.replace(dataPlaceholder, school.location);
  		var formatedMajor = HTMLschoolMajor.replace(dataPlaceholder, school.majors);

  		template.append(formatedName + formatedDegree,
  			formatedDates,
  			formatedLocation,
  			formatedMajor);
  		$("#education").append(template);
  	});


		$("#education").append(HTMLonlineClasses);
		education.onlineCourse.forEach(function(onlineClass) {
			var template = $(HTMLonlineStart);

			var formatedTitle = HTMLonlineTitle.replace(dataPlaceholder, onlineClass.title);
			var formatedSchool = HTMLonlineSchool.replace(dataPlaceholder, onlineClass.school);
			var formatedDate = HTMLprojectDates.replace(dataPlaceholder, onlineClass.date);
			var formatedUrl = HTMLonlineURL.replace(dataPlaceholder, onlineClass.url);

			template.append(formatedTitle + formatedSchool,
				formatedDate,
				formatedUrl);

			$("#education").append(template);
		});
	}
};

bio.display();
work.display();
projects.display();
education.display();
