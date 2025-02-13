
const About = () => {
    return (
        <div className="bg-gray-100 py-5 px-5 md:px-0">
            <div className="mx-auto max-w-screen-lg">


                <div className="card lg:card-side shadow-lg">
                    <figure className="md:w-1/2">
                        <img
                            src="/images/medical.jpg"
                            alt="nsti_medical"
                            className="h-full w-full"
                            />
                    </figure>
                    <div className="card-body md:w-1/2">
                        <h2 className="card-title">Welcome to the Shahid Mugdho Medical Center of NSTU</h2>
                        <p>The Shahid Mugdho Medical Center of Noakhali science and technology university (NSTU)
                        located in the medical center building offers free experienced general practitioner and 
                        emergency medical care services to all members (students, teachers, officers, staff,
                         also family members of the teachers, officers, staff­ ) of the university community.<br />
                         The center provides service usually 8.30 am to 5.00 pm in working days but provide
                          emergency services 24 hours. All members of the university get medicine from the medical 
                          center at free of cost .The center also has an ambulance, for 24 hours service.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;