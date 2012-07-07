//Jerry Pennell 1206
//Project 1
//Mobile Interfaces and Usability
//Mobile Development
//Full Sail University


//json examples for test data
var json = {
	"comic1":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Wolverine"],
		"iname": ["Issue:", "182"],
		"email": ["Email:", "wayne@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "1978-01-11"],
		"notes": ["Notes:", "Rare issue"]
	},
	"comic2":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Gen13"],
		"iname": ["Issue:", "1"],
		"email": ["Email:", "tom@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "No"],
		"rating": ["Rating:", "8"],
		"date": ["Date:", "1978-01-11"],
		"notes": ["Notes:", "Rarest issue"]
	},
	"comic3":{
		"publisher": ["Publisher:","DC"],
		"cname": ["Comic Name:", "Batman"],
		"iname": ["Issue:", "5"],
		"email": ["Email:", "brucewayne@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "9"],
		"date": ["Date:", "1970-01-07"],
		"notes": ["Notes:", "Robin appears"]
	},
	"comic4":{
		"publisher": ["Publisher:","DC"],
		"cname": ["Comic Name:", "Batman vs Robin"],
		"iname": ["Issue:", "6"],
		"email": ["Email:", "bruce@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "9"],
		"date": ["Date:", "1978-01-07"],
		"notes": ["Notes:", "Robin dies"]
	},
	"comic5":{
		"publisher": ["Publisher:","Dark Horse"],
		"cname": ["Comic Name:", "Weezle"],
		"iname": ["Issue:", "4"],
		"email": ["Email:", "thomas@there.com"],
		"haveit": ["Have it?:", "Yes"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "2"],
		"date": ["Date:", "1990-01-03"],
		"notes": ["Notes:", "Weezle rises"]
	},
	"comic6":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Sabertooth"],
		"iname": ["Issue:", "225"],
		"email": ["Email:", "saber@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "8"],
		"date": ["Date:", "2000-08-07"],
		"notes": ["Notes:", "Bad robots"]
	},
	"comic7":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Spiderman"],
		"iname": ["Issue:", "33"],
		"email": ["Email:", "spiderfriend@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "No"],
		"rating": ["Rating:", "2"],
		"date": ["Date:", "1988-11-07"],
		"notes": ["Notes:", "Rough edged"]
	},
	"comic8":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Gen13"],
		"iname": ["Issue:", "87"],
		"email": ["Email:", "genfan@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "2001-04-27"],
		"notes": ["Notes:", "Nice artwork"]
	},
	"comic9":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Gen13"],
		"iname": ["Issue:", "5"],
		"email": ["Email:", "genfan@there.com"],
		"haveit": ["Have it?:", "Yes"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "2000-01-22"],
		"notes": ["Notes:", "Great condition"]
	},
	"comic10":{
		"publisher": ["Publisher:","DC"],
		"cname": ["Comic Name:", "Superman"],
		"iname": ["Issue:", "1"],
		"email": ["Email:", "superman2@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "No"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "1976-02-18"],
		"notes": ["Notes:", "Superman son appears"]
	},
	"comic11":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Ironman"],
		"iname": ["Issue:", "88"],
		"email": ["Email:", "ironfan@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "3"],
		"date": ["Date:", "2001-11-22"],
		"notes": ["Notes:", "Ironman is awesome"]
	},
	"comic12":{
		"publisher": ["Publisher:","DC"],
		"cname": ["Comic Name:", "Darknight"],
		"iname": ["Issue:", "5"],
		"email": ["Email:", "brucewayne@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "2012-01-07"],
		"notes": ["Notes:", "Robin appears"]
	},
	"comic13":{
		"publisher": ["Publisher:","Dark Horse"],
		"cname": ["Comic Name:", "Fishman"],
		"iname": ["Issue:", "221"],
		"email": ["Email:", "tellow@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "7"],
		"date": ["Date:", "2000-12-11"],
		"notes": ["Notes:", "New Comic"]
	},
	"comic14":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Red Rose"],
		"iname": ["Issue:", "5"],
		"email": ["Email:", "lee@theretoo.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "No"],
		"rating": ["Rating:", "9"],
		"date": ["Date:", "2011-01-07"],
		"notes": ["Notes:", "Excellent comic"]
	},
	"comic15":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Hulk"],
		"iname": ["Issue:", "332"],
		"email": ["Email:", "hulkfan@there.com"],
		"haveit": ["Have it?:", "Yes"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "8"],
		"date": ["Date:", "1999-04-12"],
		"notes": ["Notes:", "Large images"]
	},
	"comic16":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Mud People"],
		"iname": ["Issue:", "521"],
		"email": ["Email:", "oldcomics@there.com"],
		"haveit": ["Have it?:", "Yes"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "1"],
		"date": ["Date:", "1973-05-07"],
		"notes": ["Notes:", "Old comic"]
	},
	"comic17":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Avengers"],
		"iname": ["Issue:", "25"],
		"email": ["Email:", "avenger@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "4"],
		"date": ["Date:", "2011-02-09"],
		"notes": ["Notes:", "Ironman appears"]
	},
	"comic18":{
		"publisher": ["Publisher:","Marvel"],
		"cname": ["Comic Name:", "Dr. Strange"],
		"iname": ["Issue:", "22"],
		"email": ["Email:", "drstrange@yahoo.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "9"],
		"date": ["Date:", "1987-09-12"],
		"notes": ["Notes:", "Not a good one"]
	},
	"comic19":{
		"publisher": ["Publisher:","Dark Horse"],
		"cname": ["Comic Name:", "Dark Alley"],
		"iname": ["Issue:", "123"],
		"email": ["Email:", "darkfan@there.com"],
		"haveit": ["Have it?:", "No"],
		"need": ["Needs appraisal:", "No"],
		"rating": ["Rating:", "1"],
		"date": ["Date:", "1999-09-19"],
		"notes": ["Notes:", "Not sure it is good"]
	},
	"comic20":{
		"publisher": ["Publisher:","Image"],
		"cname": ["Comic Name:", "Electra"],
		"iname": ["Issue:", "23"],
		"email": ["Email:", "electric@aim.com"],
		"haveit": ["Have it?:", "Yes"],
		"need": ["Needs appraisal:", "Yes"],
		"rating": ["Rating:", "10"],
		"date": ["Date:", "1988-02-11"],
		"notes": ["Notes:", "Nice artwork"]
	}

}