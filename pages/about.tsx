import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => (<>
    <Layout pageTitle={`${title} | About`} description={description}>
    <h1 className="title">About Mike</h1>

    <p className="description">
        {description}
    </p>

    <p>
        What do you need to know about the great Miike Pugina? He has a bunch of abandoned projects on github... and... uh... wrote this!
    </p>
    </Layout>
</>)


export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}