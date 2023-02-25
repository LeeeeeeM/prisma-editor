import Diagram from "~/components/diagram/diagram";
import Editor from "~/components/editor";
import Header from "~/components/layout/header/header";
import ResizeHandle from "~/components/layout/resizePanels/ResizeHandles";
import { SchemaProvider } from "~/components/schemaContext/schemaContext";
import Head from "next/head";
import { Panel, PanelGroup } from "react-resizable-panels";
import styles from "~/components/layout/resizePanels/styles.module.css";

export default function Home() {
  return (
    <main className="bg-brand-darker h-screen ">
      <Head>
        <title>
          Prisma Editor - Visualization and Easy Editing of Prisma Schema
        </title>
      </Head>
      <SchemaProvider>
        <Header />
        <div className="h-[calc(100%-64px)]">
          <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel className={styles.Panel} defaultSize={20}>
              <div className={styles.PanelContent}>
                <Editor />
              </div>
            </Panel>
            <ResizeHandle />
            <Panel className={styles.Panel}>
              <div className={styles.PanelContent}>
                <Diagram />
              </div>
            </Panel>
          </PanelGroup>
        </div>
      </SchemaProvider>
    </main>
  );
}
