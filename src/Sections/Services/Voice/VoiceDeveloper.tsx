"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal } from "lucide-react";

const snippets: Record<string, string> = {
  Python: `import requests

url = "https://api.example.com/call"

headers = {
  "Authorization": "Bearer <API_KEY>",
  "Content-Type": "application/json"
}

payload = {
  "from": "<caller_id>",
  "to": "<destination_number>",
  "type": "otp",
  "message": "Your Vialogue OTP is 7 3 8 2. Press 1 to repeat.",
  "callback_url": "https://example.com/voice/status"
}

response = requests.post(url, json=payload, headers=headers)
print(response.status_code)
print(response.json())`,

  "Node.js": `import axios from "axios";

const url = "https://api.example.com/call";

const payload = {
  from: "<caller_id>",
  to: "<destination_number>",
  type: "otp",
  message: "Your Vialogue OTP is 7 3 8 2. Press 1 to repeat.",
  callback_url: "https://example.com/voice/status",
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

uri = URI("https://api.example.com/call")

payload = {
  from: "<caller_id>",
  to: "<destination_number>",
  type: "otp",
  message: "Your Vialogue OTP is 7 3 8 2. Press 1 to repeat.",
  callback_url: "https://example.com/voice/status"
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
  url := "https://api.example.com/call"

  payload := []byte(\`{
    "from": "<caller_id>",
    "to": "<destination_number>",
    "type": "otp",
    "message": "Your Vialogue OTP is 7382. Press 1 to repeat.",
    "callback_url": "https://example.com/voice/status"
  }\`)

  req, _ := http.NewRequest("POST", url, bytes.NewBuffer(payload))
  req.Header.Set("Authorization", "Bearer <API_KEY>")
  req.Header.Set("Content-Type", "application/json")

  client := &http.Client{}
  res, _ := client.Do(req)

  fmt.Println(res.Status)
}`,

  cURL: `curl -X POST "https://api.example.com/call" \\
  -H "Authorization: Bearer <API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "<caller_id>",
    "to": "<destination_number>",
    "type": "otp",
    "message": "Your Vialogue OTP is 7382. Press 1 to repeat.",
    "callback_url": "https://example.com/voice/status"
  }'`,
};

const languages = ["Python", "Node.js", "Ruby", "Go", "cURL"];

const VoiceDeveloper: React.FC = () => {
  const [langIndex, setLangIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const lang = languages[langIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 px-4 sm:px-6 md:px-20 lg:px-40 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <Code2 size={16} className="text-[#7C3AED]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-700">For Developers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two">
            Developer-Friendly Integration
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Secure APIs",
                "Fast Integration",
                "Voice OTP",
                "IVR Support",
                "Developer Friendly",
                "Scalable Infra",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-purple-50 text-brand-purple border border-purple-100 text-[13px] font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Content */}
            <p className="text-lg md:text-[19px] text-slate-600 leading-relaxed font-medium mb-10">
              Vialogue offers clean documentation, secure authentication, and
              easy-to-use Voice APIs so developers can integrate automated calling
              quickly and reliably. From OTP calls to bulk IVR campaigns, our
              Voice APIs are built to scale with your business.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "99.9%", desc: "API Uptime" },
                { title: "100%", desc: "Pan-India Coverage" },
                { title: "24/7", desc: "Developer Support" },
                { title: "< 2s", desc: "Call Connect Time" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-3xl font-extrabold text-[#884CED] mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CODE CARD (macOS style window) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#0f172a] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-800 overflow-hidden flex flex-col h-[520px]">

              {/* Window Header */}
              <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                {/* macOS traffic lights */}
                <div className="flex gap-2 items-center w-20">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <Terminal size={14} />
                  <span>voice_api_request.sh</span>
                </div>

                <div className="w-20"></div>
              </div>

              {/* Tabs */}
              <div className="px-6 py-4 bg-[#0f172a] border-b border-slate-800/50">
                <div className="flex gap-2">
                  {languages.map((l, index) => (
                    <button
                      key={l}
                      onClick={() => setLangIndex(index)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                        lang === l
                          ? "bg-gradient-to-r from-[#7C3AED] to-purple-500 text-white shadow-md"
                          : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* CODE AREA */}
              <div className="flex-1 overflow-auto bg-[#0f172a] p-6 pt-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0f172a] [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SyntaxHighlighter
                      language={lang === "Node.js" ? "javascript" : lang.toLowerCase()}
                      style={vscDarkPlus}
                      showLineNumbers
                      customStyle={{
                        background: "transparent",
                        padding: "0",
                        margin: "0",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                      }}
                      codeTagProps={{
                        style: { fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }
                      }}
                    >
                      {snippets[lang]}
                    </SyntaxHighlighter>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VoiceDeveloper;
