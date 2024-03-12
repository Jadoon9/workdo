import faq from "../assets/landingpage/faq.svg";

const Faq = () => {
  return (
    <div className="paddingX">
      <div className="w-full">
        <h2 className="h1-bold">
          Frequently <br /> asked <br /> questions
        </h2>
        <p className="body-regular md:w-[60%] my-5 capitalize">
          Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
          tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
          tristique nunc viverra vitae cursus massa. Eget at amet tristique
          ultrices auctor.
        </p>

        <div className="grid grid-cols-12 my-12 gap-4">
          {[...Array(4)].map((item, index) => (
            <div
              className="bg-white col-span-12 lg:col-span-6 rounded-[18px] border-2 border-primary-200 p-4 lg:p-8"
              key={index}
            >
              <img src={faq} alt="" className="my-4" />
              <h5 className="body-regular font-extrabold text-primary-50">
                Enim diam porttitor lacus luctus accumsan dsa tortor posuere.
              </h5>
              <p className="text-gray-50 my-2 text-[18px]">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
