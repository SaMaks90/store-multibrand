import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const Page = () => {
  return (
    <main className={"flex-grow flex justify-center"}>
      <section className={"w-7xl pt-50"}>
        <h2 className={"text-4xl font-extrabold text-(--dark)"}>
          Terms and Conditions
        </h2>
        <section className={"py-50"}>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Introduction</strong>
            {`These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

Minors or people below 18 years old are not allowed to use this Website.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Intellectual Property Rights</strong>
            {`Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

You are granted limited license only for purposes of viewing the material contained on this Website.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Restrictions</strong>
            {`You are specifically restricted from all of the following:

publishing any Website material in any other media;
selling, sublicensing and/or otherwise commercializing any Website material;
publicly performing and/or showing any Website material;
using this Website in any way that is or may be damaging to this Website;
using this Website in any way that impacts user access to this Website;
using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
using this Website to engage in any advertising or marketing.
Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Your Content</strong>
            {`In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>No warranties</strong>
            {`This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Limitation of liability</strong>
            {`In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Indemnification</strong>
            {`You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Severability</strong>
            {`If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Variation of Terms</strong>
            {`Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Assignment</strong>
            {`The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Entire Agreement</strong>
            {`These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.

`}
          </p>
          <p className={"flex flex-col whitespace-pre-line"}>
            <strong>Governing Law & Jurisdiction</strong>
            {`These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.
`}
          </p>
        </section>
      </section>
    </main>
  );
};

export default Page;
