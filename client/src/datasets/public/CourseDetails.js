import images from "../../assets/images";

const CourseData = [
    {
        _id: "1",
        title: "Web Development",
        description: "Learn to build responsive websites and full-stack web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
        duration: "6 Months",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git & GitHub"],
        level: "Advanced",
        price: "₹15,000",
        img: images.WebDeveloper
    },
    {
        _id: "2",
        title: "App Development",
        description: "Master mobile app development by creating powerful Android and iOS apps using React Native and Flutter.",
        duration: "5 Months",
        skills: ["React Native", "Flutter", "Dart", "JavaScript", "Firebase", "API Integration", "Play Store Deployment"],
        level: "Intermediate",
        price: "₹12,000",
        img: images.AppDevelopment
    },
    {
        _id: "3",
        title: "Data Analyst",
        description: "Become a data analyst by learning how to collect, process, and visualize data using Excel, SQL, Python, and Power BI.",
        duration: "4 Months",
        skills: ["Excel", "SQL", "Python", "Pandas", "NumPy", "Power BI", "Data Visualization", "Statistics"],
        level: "Beginner",
        price: "₹10,000",
        img: images.DataAnalyst
    }
];

export default CourseData;