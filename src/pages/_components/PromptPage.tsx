import React, { useState, useEffect, useCallback } from "react";
import { Card, Typography, Tag, Tooltip, Space, Badge, Row, Col } from "antd";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { LinkOutlined } from "@ant-design/icons";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import copy from "copy-text-to-clipboard";
import styles from "./ShowcaseCard/styles.module.css";
import { updateCopyCount } from "@site/src/api";
import { Waline } from "@site/src/components/waline";
import ShareButtons from "./ShareButtons";

function PromptPage({ prompt }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const { i18n } = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale.split("-")[0];
  const title = prompt[currentLanguage].title;
  const remark = prompt[currentLanguage].remark;
  const weight = prompt.weight;
  const website = prompt.website;
  const tags = prompt.tags;

  const [mainPrompt, setMainPrompt] = useState(prompt[currentLanguage].prompt);

  // Switching between the native language and English
  function handleParagraphClick() {
    // If the current language is English, do nothing
    if (currentLanguage === "en") return;

    if (mainPrompt === prompt[currentLanguage].prompt) {
      setMainPrompt(prompt[currentLanguage].description);
    } else {
      setMainPrompt(prompt[currentLanguage].prompt);
    }
  }

  // Handle copying the mainPrompt text
  const [copied, setShowCopied] = useState(false);
  const handleCopyClick = useCallback(async () => {
    try {
      if (mainPrompt) {
        copy(mainPrompt);
      }
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
      await updateCopyCount(prompt.id);
    } catch (error) {
      console.error("Error updating copy count:", error);
    }
  }, [prompt.id, mainPrompt]);

  let walineLang = currentLanguage;
  if (!["zh", "ja"].includes(currentLanguage)) {
    walineLang = "en";
  }

  const walineOptions = {
    serverURL: "https://waline.newzone.top",
    path: "/prompt/" + prompt.id,
    login: "force",
    wordLimit: 2000,
    lang: walineLang, //支持 zh、ja、en
  };

  return (
    <Layout title={title} description={remark}>
      <Row justify='center' style={{ marginTop: "20px" }}>
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <li key={title} className='card shadow--md'>
            <Card
              title={
                <span>
                  {title} <Badge count={"Weight: " + weight} style={{ backgroundColor: "#52c41a" }} />
                  <button className={clsx("button button--secondary button--sm", styles.showcaseCardSrcBtn)} type='button' onClick={handleCopyClick}>
                    {copied ? <Translate id='theme.CodeBlock.copied'>已复制</Translate> : <Translate id='theme.CodeBlock.copy'>复制</Translate>}
                  </button>
                  {/* <Button type="text" icon={<HeartOutlined />} /> */}
                </span>
              }
              extra={
                website ? (
                  <a href={website}>
                    <LinkOutlined />
                  </a>
                ) : null
              }>
              <p className={styles.showcaseCardBody}>👉 {remark}</p>
              <Tooltip title={<Translate id='tooltip.switchLang'>点击切换显示语言</Translate>}>
                <p onClick={handleParagraphClick} className={styles.showcaseCardBody} style={{ cursor: "pointer" }}>
                  {mainPrompt}
                </p>
              </Tooltip>
              <Space wrap>
                {tags.map((tag) => (
                  <Link to={"/?tags=" + tag}>
                    <Tag color='blue' key={tag}>
                      {tag}
                    </Tag>
                  </Link>
                ))}
              </Space>
              <Typography.Paragraph style={{ color: "gray", fontSize: "0.9em", marginTop: "20px" }}>
                <Translate id='comments.info'>请在下方回复您对本提示词的意见、想法或分享。</Translate>
              </Typography.Paragraph>{" "}
              <ShareButtons shareUrl={url} title={`${title}: ${remark}`} popOver={true} />
              {/* {["zh"].includes(currentLanguage) && (
                <div className="wwads-cn wwads-horizontal wwads-sticky" data-id="256" style={{ maxWidth: '350px' }}></div>
              )} */}
              <Waline {...walineOptions} />
            </Card>
          </li>
        </Col>
      </Row>
    </Layout>
  );
}

export default PromptPage;
