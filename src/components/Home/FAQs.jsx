import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

export const FAQs = () => {
    return (
        <div className='my-20'>
            <div div className='text-center mb-16' >
                <h4 className='text-accent font-bold text-xl uppercase'>FAQs</h4>
                <h2 className='text-secondary font-normal text-3xl'>Have any questions?</h2>
            </div>
            <div className="bg-white lg:w-8/12 w-11/12 mx-auto">
                <div className="divide-y divide-neutral-200">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> What is a SAAS platform?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> How does  billing work?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> Can I get a refund for my subscription?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                                satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                                for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                                basis.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> How do I cancel my subscription?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                To cancel your We subscription, you can log in to your account and navigate to the
                                subscription management page. From there, you should be able to cancel your subscription and stop
                                future billing.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> Can I try this platform for free?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We offers a free trial of its  platform for a limited time. During the trial period,
                                you will have access to a limited set of features and functionality, but you will not be charged.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> How do I access   documentation?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                Documentation is available on the company's website and can be accessed by
                                logging in to your account. The documentation provides detailed information on how to use the ,
                                as well as code examples and other resources.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> How do I contact support?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                If you need help with the platform or have any other questions, you can contact the
                                company's support team by submitting a support request through the website or by emailing
                                support@We.com.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> Do you offer any discounts or promotions?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We may offer discounts or promotions from time to time. To stay up-to-date on the latest
                                deals and special offers, you can sign up for the company's newsletter or follow it on social media.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className='text-semibold lg:text-xl text-base'> How do we compare to other similar services?</span>
                                <span className="transition group-open:rotate-45">
                                    <IoIosAddCircle className="transition group-open:rotate-45 bg-primary rounded-full text-white text-2xl" />
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                This platform is a highly reliable and feature-rich service that offers a wide range
                                of tools and functionality. It is competitively priced and offers a variety of billing options to
                                suit different needs and budgets.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FAQs;
