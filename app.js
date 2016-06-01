(function() {
    var app = angular.module('talk-list', []);

    app.controller("SourceController", function() {
        this.sources = sources;
    });

    app.controller("TalkController", function() {
        this.talks = talks;
    });

    app.filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);};
    }]);

    var sources = {
        "Øredev Conference": "https://vimeo.com/user4280938",
        "GOTO Conferences": "https://www.youtube.com/channel/UCs_tLP3AiwYKwdUHpltJPuA",
        "Devoxx": "https://www.youtube.com/channel/UCCBVCTuk6uJrN3iFV_3vurg",
        "JavaOne": "https://www.youtube.com/channel/UCdDhYMT2USoLdh4SZIsu_1g",
        "Strange Loop": "https://www.youtube.com/channel/UC_QIfHvN9auy2CoOdSfMWDw",
        "GeeCON": "https://vimeo.com/geecon",
        "Yow!": "https://www.youtube.com/channel/UCAvGvvEemkeX8hurdPXr7hA",
        "JFokus": "https://www.youtube.com/user/javamattias",
        "JavaZone": "https://vimeo.com/javazone"
    };

    var talks = [
        [
            {
                title: "Applying Reactive Programming with Rx",
                author: "Ben Christensen",
                description: "This talk will leverage the experience of introducing reactive programming into existing imperative, blocking codebases to demonstrate how it can be done and when it can make sense to do so. Not all benefits of reactive programming can be obtained without a greenfield, fully async architecture, but many can. Subjects to be covered will include the mental shift from imperative to declarative, working with blocking IO such as JDBC and RPC, service composition, debugging and unit testing.",
                url: "http://www.youtube.com/watch?v=8OcCSQS0tug",
                embedded_url: "http://www.youtube.com/embed/8OcCSQS0tug?rel=0",
                tags: ["rx", "java"],
                date: '11-05-2015'
            },
            {
                title: "Introduction to NoSQL",
                author: "Martin Fowler",
                description: "Martin gives a rapid introduction to NoSQL databases: where they came from, the nature of the data models they use, and the different way you have to think about consistency. From this he outlines what kinds of circumstances you should consider using them, why they will not make relational databases obsolete, and the important consequence of polyglot persistence.",
                url: "http://www.youtube.com/watch?v=qI_g07C_Q5I",
                embedded_url: "http://www.youtube.com/embed/qI_g07C_Q5I?rel=0",
                tags: ["nosql", "db"],
                date: '03-10-2012'
            },
            {
                title: "The mess we're in",
                author: "Joe Armstrong",
                description: "A quick journey from the past to the present to illuminate how things have changed in the world of programming.",
                url: "http://www.youtube.com/watch?v=lKXe3HUG2l4",
                embedded_url: "http://www.youtube.com/embed/lKXe3HUG2l4?rel=0",
                tags: [],
                date: '18-09-2014'
            }
        ],
        [
            {
                title: "Demystifying RxJava Subscribers",
                author: "Jake Wharton",
                description: "RxJava is a powerful library for creating and composing streams of data. It can quickly be used to great effect, but a deeper understand of its internals will prevent running into pitfalls later on. This talk will focus on the core mechanism of how streams are created and observed: subscribers and subscriptions.",
                url: "http://vimeo.com/144812843",
                embedded_url: "http://player.vimeo.com/video/144812843",
                tags: ["rx", "java"],
                date: '05-11-2015'
            },
            {
                title: "To The Moon",
                author: "Russ Olsen",
                description: "We all have moments that change the way we think, the way we look at the world, the things we want to do with our lives. On July 20, 1969 millions of people had one of those transforming experiences: Two men landed on the Moon and nothing was ever the same again. Why did we go to the Moon? How did we get there? What was it like to witness it all? And what does any of this have to do with writing software 40 years later?",
                url: "https://www.youtube.com/watch?v=l3XwpSKqNZw",
                embedded_url: "http://www.youtube.com/embed/l3XwpSKqNZw?rel=0",
                tags: ["keynote"],
                date: '03-12-2015'
            },
            {
                title: "Space Shuttle",
                author: "Stephen Carver",
                description: "January 28th 1986 - the space shuttle Challenger explodes just one minute after launch. As the world looked on horrified, few realised that this was an inevitable accident that had been predicted by the designers for years. Indeed, the day before the key engineers believed that there was \"essentially a 100% probability of disaster\".",
                url: "https://www.youtube.com/watch?v=AyrRoKN_kvg",
                embedded_url: "http://www.youtube.com/embed/AyrRoKN_kvg?rel=0",
                tags: ["keynote"],
                date: '04-12-2015'
            }
        ],
        [
            {
                title: "This is water",
                author: "Neal Ford",
                description: "This keynote describes the water you swim in but cannot see anymore, like relational databases and application servers. Additionally, it jerks you out of safe, warm water (briefly) to describe a strange, fantastical world with things like immutable database server, phoenix machines, and lambdas.",
                url: "https://vimeo.com/110776191",
                embedded_url: "http://player.vimeo.com/video/110776191",
                tags: ["keynote"],
                date: '23-10-2014'
            },
            {
                title: "Agile is Dead",
                author: "Dave Thomas",
                description: "It turns out that while the \"Agile\" industry is busy debasing the meaning of the word, the underlying values are still strong. In this talk, Dave will draw a distinction, and show us how to reclaim agility for ourselves.",
                url: "https://www.youtube.com/watch?v=a-BOSpxYJ9M",
                embedded_url: "http://www.youtube.com/embed/a-BOSpxYJ9M?rel=0",
                tags: ["keynote"],
                date: '18-06-2015'
            },
            {
                title: "Software Architecture vs. Code",
                author: "Simon Brown",
                description: "Software architecture and coding are often seen as mutually exclusive disciplines, despite us referring to higher level abstractions when we talk about our software. You've probably heard others on your team talking about components, services and layers rather than objects when they're having discussions. Take a look at the codebase though. Can you clearly see these abstractions or does the code reflect some other structure?",
                url: "https://www.youtube.com/watch?v=GAFZcYlO5S0",
                embedded_url: "http://www.youtube.com/embed/GAFZcYlO5S0?rel=0",
                tags: ["architecture"],
                date: '19-06-2014'
            }
        ]
    ];
})();
