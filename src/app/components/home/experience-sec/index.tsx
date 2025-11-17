import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Feb 2019 – Jun 2021",
            title: "Sales Executive",
            company: "justdial Pvt Ltd",
            type: "Fulltime",
            description: "Promoted and sold business listing services to clients across various industries while building and maintaining strong customer relationships. Conducted market research to identify new opportunities and understand client needs. Achieved sales targets through effective negotiation and communication. Provided excellent customer service and post-sales support to ensure high client satisfaction."
        },
        {
            year: "Jun 2021 – Jul 2022",
            title: "Web & Graphic Designer",
            company: "Binary Vectors(Self Employeed)",
            type: "Full time",
            description: "Created and customized WordPress websites, themes, and plugins based on client requirements while also designing custom graphics, branding materials, and logos using Adobe Illustrator and Photoshop. Collaborated closely with clients to understand their business goals and deliver high-quality design solutions. Managed complete website project workflows, including domain purchase, hosting setup, email configuration, and payment gateway integration."
        },
        {
            year: "Jul 2022 – Dec 2024",
            title: "UI Developer",
            company: "Prism Adverto Pvt Ltd",
            type: "Fulltime",
            description: "Developed user interfaces using HTML, CSS, Bootstrap, and JavaScript while optimizing code for performance, accessibility, usability, SEO, and cross-browser compatibility. Maintained and updated existing websites to meet client requirements and engineered adaptive, mobile-friendly designs that reduced bounce rates by 40%. Integrated REST APIs to enable seamless front-end and back-end communication, delivering dynamic user experiences. Tested websites across multiple browsers and devices, provided technical support, and ensured smooth functionality. Managed hosting setups, handled website deployments, and implemented essential security measures including firewalls and encryption."
        },
        {
            year: "Jan 2025 - Present",
            title: "UI Developer",
            company: "Freelance",
            type: "Fulltime",
            description: "As a Freelance UI Developer, I developed modern, responsive websites and web applications using React.js, Redux, Context Api, JavaScript, HTML, and CSS. I built reusable components, integrated REST APIs, and implemented efficient state management for dynamic and scalable UIs. I collaborated directly with clients to understand requirements, delivered customized solutions, and handled end-to-end development—including deployment, hosting setup, and performance optimization. My freelance work strengthened my problem-solving skills and ability to deliver high-quality projects independently."
        },
        {
            year: "Jun 2025 - Present",
            title: "UI Developer",
            company: "Prism Adverto Pvt Ltd",
            type: "Fulltime",
            description : "Designed, developed, and maintained responsive, scalable web applications using React.js, JavaScript (ES6+), HTML5, and CSS3, following modern UI/UX principles. Utilized Redux and Context API for efficient state management and integrated RESTful APIs to deliver dynamic, interactive features. Collaborated with designers and backend teams to create optimized, user-centric interfaces, while also handling domain purchases, hosting setup, and deployments through cPanel and hPanel. Implemented security measures such as firewalls, SSL, and routine server maintenance, and resolved server-side issues to ensure stability. Conducted UI testing and debugging for cross-browser compatibility and accessibility, and optimized website performance, loading speed, and SEO to improve overall user engagement."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 4 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 4 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;