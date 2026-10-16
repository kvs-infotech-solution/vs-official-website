// ===== KVS INFOTECH SOLUTION - COURSE DATA =====

const courses = {
    "data-science": {
        title: "Data Science",
        image: "images/data-science.jpg",
        description: "Learn Python, data analysis, statistics and machine learning to discover insights from data.",
        career: "Explore career paths such as Data Scientist, Data Analyst and Machine Learning Engineer.",
        learn: [
            {
                title: "Python Programming",
                description: "Learn Python basics and essential programming concepts."
            },
            {
                title: "Data Analysis",
                description: "Work with data, statistics and visualization."
            },
            {
                title: "Machine Learning",
                description: "Understand machine learning concepts and practical applications."
            }
        ]
    },

    "data-analytics": {
        title: "Data Analytics",
        image: "images/data-analytics.jpg",
        description: "Learn how to analyze data, create dashboards and make informed business decisions.",
        career: "Explore career paths such as Data Analyst, Business Analyst and Reporting Analyst.",
        learn: [
            {
                title: "Excel & Data",
                description: "Organize, clean and analyze data effectively."
            },
            {
                title: "SQL & Databases",
                description: "Learn to retrieve and work with database information."
            },
            {
                title: "Dashboards",
                description: "Understand data visualization and reporting."
            }
        ]
    },

    "full-stack-development": {
        title: "Full Stack Development",
        image: "images/full-stack-development.jpg",
        description: "Learn to build complete websites and web applications using frontend and backend technologies.",
        career: "Explore career paths such as Frontend Developer, Backend Developer and Full Stack Developer.",
        learn: [
            {
                title: "Frontend Development",
                description: "Learn HTML, CSS and JavaScript to create user interfaces."
            },
            {
                title: "Backend Development",
                description: "Understand server-side programming and APIs."
            },
            {
                title: "Database & Projects",
                description: "Learn database fundamentals and build web projects."
            }
        ]
    },

    "cyber-security": {
        title: "Cyber Security",
        image: "images/cyber-security.jpg",
        description: "Understand cybersecurity fundamentals, online threats and methods for protecting digital systems.",
        career: "Explore career paths such as Security Analyst, SOC Analyst and Cybersecurity Associate.",
        learn: [
            {
                title: "Security Fundamentals",
                description: "Understand common threats and security principles."
            },
            {
                title: "Network Security",
                description: "Learn networking concepts and security practices."
            },
            {
                title: "Threat Awareness",
                description: "Understand vulnerabilities and defensive techniques."
            }
        ]
    },

    "sap": {
        title: "SAP",
        image: "images/sap.jpg",
        description: "Explore enterprise software and understand how businesses manage their operations using SAP solutions.",
        career: "Depending on your chosen SAP module, explore roles such as SAP Consultant and SAP Support Associate.",
        learn: [
            {
                title: "SAP Fundamentals",
                description: "Understand SAP and enterprise business software."
            },
            {
                title: "Business Processes",
                description: "Explore how enterprise systems support business operations."
            },
            {
                title: "SAP Modules",
                description: "Discover modules based on your chosen learning path."
            }
        ]
    },

    "digital-marketing": {
        title: "Digital Marketing",
        image: "images/digital-marketing.jpg",
        description: "Learn online marketing fundamentals, SEO, social media and digital campaign strategies.",
        career: "Explore career paths such as Digital Marketing Executive, SEO Analyst and Social Media Executive.",
        learn: [
            {
                title: "SEO Fundamentals",
                description: "Understand search engine optimization basics."
            },
            {
                title: "Social Media",
                description: "Learn social media marketing and content planning."
            },
            {
                title: "Digital Campaigns",
                description: "Understand campaign planning and performance measurement."
            }
        ]
    },

    "ai-machine-learning": {
        title: "AI & Machine Learning",
        image: "images/ai-machine-learning.jpg",
        description: "Learn artificial intelligence and machine learning with practical examples.",
        career: "Explore careers in AI development and machine learning.",
        learn: [
            {
                title: "AI Fundamentals",
                description: "Understand artificial intelligence and its applications."
            },
            {
                title: "Python for AI",
                description: "Learn how Python is used in AI and machine learning."
            },
            {
                title: "Machine Learning Projects",
                description: "Explore basic machine learning models through projects."
            }
        ]
    },

    "power-bi": {
        title: "Power BI",
        image: "images/power-bi.jpg",
        description: "Learn to transform business data into interactive reports and dashboards.",
        career: "Explore career paths such as Power BI Developer, BI Analyst and Reporting Analyst.",
        learn: [
            {
                title: "Data Import & Cleaning",
                description: "Learn to connect to data sources and prepare data."
            },
            {
                title: "Data Modeling",
                description: "Understand relationships and basic DAX calculations."
            },
            {
                title: "Interactive Dashboards",
                description: "Create reports and visualizations for business insights."
            }
        ]
    },

    "tableau": {
        title: "Tableau",
        image: "images/tableau.jpg",
        description: "Learn data visualization and create interactive dashboards using Tableau.",
        career: "Explore career paths such as Tableau Developer, Data Visualization Analyst and BI Analyst.",
        learn: [
            {
                title: "Connecting Data",
                description: "Learn to connect datasets and understand data structures."
            },
            {
                title: "Charts & Visualizations",
                description: "Create charts and meaningful data visualizations."
            },
            {
                title: "Interactive Dashboards",
                description: "Build dashboards to communicate data insights."
            }
        ]
    },

    "cloud-computing": {
        title: "Cloud Computing",
        image: "images/cloud-computing.jpg",
        description: "Understand cloud computing concepts, infrastructure and cloud-based services.",
        career: "Explore career paths such as Cloud Support Associate, Cloud Administrator and Cloud Engineer.",
        learn: [
            {
                title: "Cloud Fundamentals",
                description: "Understand cloud services, deployment models and cloud concepts."
            },
            {
                title: "Cloud Platforms",
                description: "Explore foundational services from AWS or Microsoft Azure."
            },
            {
                title: "Cloud Deployment",
                description: "Learn the basics of deploying and managing cloud resources."
            }
        ]
    },

    "python-programming": {
        title: "Python Programming",
        image: "images/python-programming.jpg",
        description: "Learn Python programming from basic syntax to functions, data structures and practical projects.",
        career: "Build foundations for roles such as Python Developer and Junior Programmer.",
        learn: [
            {
                title: "Python Basics",
                description: "Learn variables, data types, conditions and loops."
            },
            {
                title: "Functions & Data Structures",
                description: "Work with functions, lists, dictionaries and modules."
            },
            {
                title: "Practical Projects",
                description: "Apply your skills by building beginner-friendly Python projects."
            }
        ]
    },

    "software-testing": {
        title: "Software Testing",
        image: "images/software-testing.jpg",
        description: "Learn software testing fundamentals, test case design and defect reporting.",
        career: "Explore career paths such as QA Tester, Manual Tester and Software Test Engineer.",
        learn: [
            {
                title: "Testing Fundamentals",
                description: "Understand testing types, test levels and software quality."
            },
            {
                title: "Test Cases & Bug Reports",
                description: "Learn to write test cases and document defects."
            },
            {
                title: "Automation Introduction",
                description: "Explore automation testing concepts and tools."
            }
        ]
    },

    "core-java": {
        title: "Core Java",
        image: "images/core-java.jpg",
        description: "Learn Java programming, object-oriented principles and core language concepts.",
        career: "Build foundations for roles such as Java Developer and Junior Software Engineer.",
        learn: [
            {
                title: "Java Fundamentals",
                description: "Learn syntax, variables, data types and control statements."
            },
            {
                title: "Object-Oriented Programming",
                description: "Understand classes, objects, inheritance and polymorphism."
            },
            {
                title: "Collections & Exceptions",
                description: "Explore collections, exception handling and practical coding."
            }
        ]
    },

    "mobile-app-development": {
        title: "Mobile App Development",
        image: "images/mobile-app-development.jpg",
        description: "Explore mobile application design, development fundamentals and app testing.",
        career: "Explore roles such as Junior App Developer and Mobile Application Developer.",
        learn: [
            {
                title: "Mobile Development Basics",
                description: "Understand mobile platforms and application architecture."
            },
            {
                title: "UI & App Logic",
                description: "Learn to build app screens and implement functionality."
            },
            {
                title: "Testing & Deployment",
                description: "Understand app testing, debugging and deployment basics."
            }
        ]
    },

    "advanced-excel": {
        title: "Advanced Excel",
        image: "images/advanced-excel.jpg",
        description: "Develop spreadsheet skills using advanced formulas, data analysis and reporting tools.",
        career: "Explore roles such as MIS Executive, Reporting Executive and Data Analyst.",
        learn: [
            {
                title: "Advanced Formulas",
                description: "Practice lookup functions, logical formulas and calculations."
            },
            {
                title: "Data Analysis",
                description: "Use sorting, filtering, PivotTables and data tools."
            },
            {
                title: "Reports & Dashboards",
                description: "Create organized reports and visual dashboards."
            }
        ]
    },

    "tally-prime-gst": {
        title: "Tally Prime with GST",
        image: "images/tally-prime-gst.jpg",
        description: "Learn accounting fundamentals, business entries and GST-related workflows using Tally Prime.",
        career: "Explore roles such as Accounts Assistant, Junior Accountant and Billing Executive.",
        learn: [
            {
                title: "Accounting Fundamentals",
                description: "Understand ledgers, vouchers and basic accounting entries."
            },
            {
                title: "Tally Prime",
                description: "Practice company setup, transactions and financial reports."
            },
            {
                title: "GST Basics",
                description: "Learn GST-related entries and reports through practical examples."
            }
        ]
    }

    
};


// ===== DISPLAY THE SELECTED COURSE =====

const params = new URLSearchParams(window.location.search);
const courseId = params.get("id") || "data-science";
const course = courses[courseId];

if (course) {
    document.title = course.title + " | KVS Infotech Solution";

    document.getElementById("course-title").textContent = course.title;

    document.getElementById("course-description").textContent =
        course.description;

    document.getElementById("course-image").src = course.image;
    document.getElementById("course-image").alt = course.title;

    document.getElementById("career-description").textContent =
        course.career;

        document.querySelectorAll(".course-enquiry-btn").forEach(function(button) {
    button.href = "contact.html?course=" + encodeURIComponent(course.title);
});

    const learningList = document.getElementById("learning-list");

    learningList.replaceChildren();

    course.learn.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "learning-card";

        const number = document.createElement("span");
        number.textContent = String(index + 1).padStart(2, "0");

        const heading = document.createElement("h3");
        heading.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(number, heading, description);
        learningList.appendChild(card);
    });
} else {
    document.getElementById("course-title").textContent =
        "Course Not Found";

    document.getElementById("course-description").textContent =
        "Please return to the home page and select a valid course.";

    document.getElementById("course-image").hidden = true;

    document.getElementById("learning-list").replaceChildren();

    document.getElementById("career-description").textContent = "";
}