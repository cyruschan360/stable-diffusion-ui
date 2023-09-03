## Frequently Asked Questions

### What is Stable Diffusion?
Stable Diffusion is a deep learning, text-to-image model developed by start-up Stability AI in collaboration with various academic researchers and non-profit organizations. Designed to generate detailed images based on text descriptions, Stable Diffusion can also be applied to inpainting, outpainting, and image-to-image translations guided by a text prompt. Unlike proprietary text-to-image models such as DALL-E and Midjourney, which are accessible only via cloud services, Stable Diffusion's code and model weights have been released publicly, making it available to users with consumer hardware equipped with a modest GPU of at least 8 GB VRAM.

### What is Easy Diffusion?
Easy Diffusion is a user-friendly distribution of Stable Diffusion, a top open source text-to-image AI software. It offers a simple installation process, including all necessary components to run Stable Diffusion and a free, powerful web interface for a seamless experience, which is particularly useful for educational use.

### What is ControlNet?
ControlNet is a family of neural networks that offers more structural and artistic control over image generation by fine-tuning Stable Diffusion models with task-specific conditions. Introduced by Lvmin Zhang and Maneesh Agrawala, ControlNet learns task-specific features during training, allowing for image generation from simple canny images to complex normal maps.

### How to use ControlNet in Easy Diffusion?
Currently, ControlNet is only applicable to SD v1.5 models in Easy Diffusion. You can choose "SD 1.5 Pruned EMA" in the model list and "vae-ft-mse-840000-ema-pruned" in the custom vae list when using ControlNet feature.

### What is LoRA?
LoRA (Low-Rank Adaptation) is a training technique for fine-tuning Stable Diffusion models, offering a balance between file size and training power. While Dreambooth provides powerful training but results in large model files, and textual inversions are smaller but less capable, LoRA models have more manageable file sizes (2-200 MBs) and decent training power. This makes them an excellent solution for users facing local storage issues.

LoRA models cannot be used alone and must be used with a model checkpoint file. They work by applying small changes to the cross-attention layers, which are the most critical part of Stable Diffusion models. Researchers found that fine-tuning this part achieves good training results without impacting performance significantly.

The technique reduces file size by breaking a matrix into two smaller (low-rank) matrices, storing fewer numbers. For example, a 1,000-row and 2,000-column matrix can be broken down into a 1,000-by-2 matrix and a 2-by-2,000 matrix, reducing the number of stored numbers by 333 times. This decomposition results in low-rank matrices without affecting the power of fine-tuning, making LoRA an efficient and practical solution for customizing AI art models.

### How to use LoRA?
You can choose below LoRA in "Image Settings" > "LoRA",
- 3D Render style
- Dream Art
- Paper Cut
- Pixel Art
- Serafini style