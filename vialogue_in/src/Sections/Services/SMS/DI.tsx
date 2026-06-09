"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { motion, AnimatePresence } from "framer-motion";

const snippets: Record<string, string> = {
  Python: `import requests

url = "https://sms.vialogue.io/"

headers = {
  "Authorization": "Bearer <API_KEY>",
  "Content-Type": "application/json"
}

payload = {
  "from": "<from_number>",
  "to": "<destination_number>",
  "message": "Your Vialogue OTP is 482931. Valid for 5 minutes.",
  "callback_url": "https://example.com/sms/status"
}

response = requests.post(url, json=payload, headers=headers)
print(response.status_code)
print(response.json())`,

  "Node.js": `import axios from "axios";

const url = "https://sms.vialogue.io/";

const payload = {
  from: "<from_number>",
  to: "<destination_number>",
  message: "Your Vialogue OTP is 482931. Valid for 5 minutes.",
  callback_url: "https://example.com/sms/status",
};

axios.post(url, payload, {
  headers: {
    Authorization: "Bearer <API_KEY>",
    "Content-Type": "application/json",
  },
})
.then(res => console.log(res.data))
.catch(err => console.error(err));`,

  Ruby: `require "net/http"
require "json"

uri = URI("https://sms.vialogue.io/")

payload = {
  from: "<from_number>",
  to: "<destination_number>",
  message: "Your Vialogue OTP is 482931. Valid for 5 minutes.",
  callback_url: "https://example.com/sms/status"
}

req = Net::HTTP::Post.new(uri, "Content-Type" => "application/json",
                                "Authorization" => "Bearer <API_KEY>")
req.body = payload.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

puts res.body`,

  Go: `package main

import (
  "bytes"
  "fmt"
  "net/http"
)

func main() {
  url := "https://sms.vialogue.io/"

  payload := []byte(\`{
    "from": "<from_number>",
    "to": "<destination_number>",
    "message": "Your Vialogue OTP is 482931. Valid for 5 minutes.",
    "callback_url": "https://example.com/sms/status"
  }\`)

  req, _ := http.NewRequest("POST", url, bytes.NewBuffer(payload))
  req.Header.Set("Authorization", "Bearer <API_KEY>")
  req.Header.Set("Content-Type", "application/json")

  client := &http.Client{}
  res, _ := client.Do(req)

  fmt.Println(res.Status)
}`,

  cURL: `curl -X POST "https://sms.vialogue.io/" \\
  -H "Authorization: Bearer <API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "<from_number>",
    "to": "<destination_number>",
    "message": "Your Vialogue OTP is 482931. Valid for 5 minutes.",
    "callback_url": "https://example.com/sms/status"
  }'`,
};

const languages = ["Python", "Node.js", "Ruby", "Go", "cURL"];

const DeveloperIntegration: React.FC = () => {
  const [langIndex, setLangIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const lang = languages[langIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 pt-16 md:px-40 sm:py-16"
    >
      <h1 className="text-2xl md:text-4xl heading-two text-center font-medium mb-20">
            Developer-Friendly Integration
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-30 items-center">

        {/* LEFT CONTENT */}
        <div className="mt-4 md:mt-10">
  {/* Chips */}
  <div className="flex flex-wrap gap-3 mb-6">
    {[
      "Secure APIs",
      "Fast Integration",
      "OTP Delivery",
      "Global Messaging",
      "Developer Friendly",
      "Scalable Infrastructure",
    ].map((item, index) => (
      <span
        key={index}
        className="px-4 py-2 rounded-full bg-[#774ADF]/10 text-[#774ADF] border border-[#774ADF]/20 text-sm md:text-base font-medium"
      >
        {item}
      </span>
    ))}
  </div>

  {/* Content */}
  <p className="text-lg md:text-2xl paragraph text-gray-700 leading-relaxed text-justify">
    Vialogue offers clean documentation, secure authentication, and
    easy-to-use APIs so developers can integrate SMS messaging quickly
    and reliably. From startups to large enterprises, our SMS APIs are
    built to scale with your business.
  </p>

  {/* Extra Stats / Content */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold text-[#774ADF]">99.9%</h3>
      <p className="text-sm text-gray-600 mt-1">API Uptime</p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold text-[#774ADF]">150+</h3>
      <p className="text-sm text-gray-600 mt-1">Countries Covered</p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold text-[#774ADF]">24/7</h3>
      <p className="text-sm text-gray-600 mt-1">Developer Support</p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold text-[#774ADF]">&lt; 2s</h3>
      <p className="text-sm text-gray-600 mt-1">Average Delivery</p>
    </div>
  </div>
</div>

        {/* CODE CARD */}
        <div className="bg-[#0B1020] text-white rounded-xl shadow-2xl p-6 font-mono h-[500px] flex flex-col">

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 text-xs mb-4">
            {languages.map((l, index) => (
              <button
                key={l}
                onClick={() => setLangIndex(index)}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  lang === l
                    ? "text-orange-400 font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CODE AREA */}
          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <SyntaxHighlighter
                  language={lang === "Node.js" ? "javascript" : lang.toLowerCase()}
                  style={vscDarkPlus}
                  showLineNumbers
                  customStyle={{
                    background: "transparent",
                    padding: "0",
                    fontSize: "0.88rem",
                    minHeight: "100%",
                  }}
                >
                  {snippets[lang]}
                </SyntaxHighlighter>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default DeveloperIntegration;