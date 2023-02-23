import Layout from "../components/layout";

export default function Custom404() {
  return <Layout>
    <article className="prose mt-12 max-w-none min-h-0 flex flex-col flex-grow">
      <h1>404 - Not Found</h1>
      <div className="flex text-primary text-center flex-grow justify-center items-center">
        <p>¯\_(ツ)_/¯</p>
      </div>
    </article>
  </Layout>
}