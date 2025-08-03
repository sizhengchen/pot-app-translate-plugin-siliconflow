# pot-app-translate-plugin-siliconflow

siliconflow翻译插件 - 一个为pot-app开发的翻译插件

## 简介

这是一个基于siliconflow API的翻译插件，在这个[pot-app-translate-plugin-deepseek](https://github.com/Tzulao55/pot-app-translate-plugin-deepseek)大佬的项目基础上进行的修改，使用硅基流动上的免费模型，只需要在硅基流动上申请一个apikey即可使用。

## 前置要求

- [pot-app](https://github.com/pot-app/pot-app) - 请先下载并安装pot-app
- [硅基流动](https://cloud.siliconflow.cn)- 需要在硅基流动官网申请API密钥
- [邀请链接](https://cloud.siliconflow.cn/i/Rc7420Fp)- 当然，也可以选择我的邀请链接进行注册(各得2000 万 Tokens)

## 功能特点

- 支持多种模型："THUDM/GLM-4.1V-9B-Thinking"，"THUDM/GLM-4-9B-0414"，"THUDM/glm-4-9b-chat"，"Qwen/Qwen2.5-7B-Instruct"，"Qwen/Qwen2.5-Coder-7B-Instruct"，"Qwen/Qwen2-7B-Instruct"，"internlm/internlm2_5-7b-chat"，"Qwen/Qwen3-8B"，"THUDM/GLM-Z1-9B-0414"，"deepseek-ai/DeepSeek-R1-0528-Qwen3-8B"，"deepseek-ai/DeepSeek-R1-Distill-Qwen-7B" (截止到2025.08.03，以上模型在硅基流动官网上均显示为免费)
- 支持多种语言之间的互译
- 提供专业、流畅的翻译结果

## 安装方法

1. 在pot-app中点击"偏好设置"
2. 选择"服务设置"
3. 点击"翻译-添加外部插件"
4. 选择本插件的发布包进行安装

## 配置说明

1. 从列表里任意选择一个翻译模型，后四个为推理模型，翻译速度较慢，第一个在硅基流动官网未标记为推理模型，但实测翻译速度较慢，其他模型翻译速度尚可
2. 输入你的siliconflow API密钥

## 使用说明

安装并配置完成后，在pot-app的翻译引擎列表中选择"siliconflow"即可使用

第一次使用要在插件所提供的列表中选择一个模型点击保存后再使用，否则配置完密钥后，将使用固定模型，翻译时可能会出现报错。

## 注意事项

- 请妥善保管你的API密钥
- 翻译服务需要联网使用
