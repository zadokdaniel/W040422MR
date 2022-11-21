import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Real<i className="bi bi-geo-fill"></i>App
        </>
      }
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corporis ex doloribus dignissimos hic tempore voluptatem eligendi eaque expedita rem."
    />
  );
};

export default About;
