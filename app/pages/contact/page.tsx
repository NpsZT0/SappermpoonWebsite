import ScrollToTopButton from "@/app/components/scroll-to-top";

function ContactUs() {
    return (
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">
                <article className="mb-32 lg:col-span-8">
                    <div className="flex-grow mb-8 break-words sm:mx-8 ">
                        <div className="py-8 border-b border-gray-200">
                            <h1 className="text-3xl font-bold sm:text-4xl text-start">
                                ติดต่อเรา
                            </h1>
                            <p className="text-gray-500 text-start">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                                minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                                inventore soluta numquam temporibus, quidem est.
                            </p>
                        </div>
                    </div>
                </article>
                {/* Scroll to top */}
                <ScrollToTopButton />
            </div>
        </div>
    );
}

export default ContactUs;