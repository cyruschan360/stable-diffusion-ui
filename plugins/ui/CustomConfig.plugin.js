// ==UserScript==
// @name         CustomConfig
// @version      1.0
// @description  Custom UI settings
// @author       Gigantic Work

(function () {
    const isGiganticWork = location.hostname.endsWith('gigantic.work');
    const block_nsfw = true;
    const config = [
        {"key":"prompt","value":"","ignore":false},
        {"key":"seed","value":"0","ignore":true},
        {"key":"random_seed","value":true,"ignore":false},
        {"key":"num_outputs_total","value":1,"ignore":false},
        {"key":"num_outputs_parallel","value":1,"ignore":false},
        {"key":"stable_diffusion_model","value":"_default_","ignore":false},
        {"key":"clip_skip","value":false,"ignore":false},
        {"key":"vae_model","value":"sdxl_vae","ignore":false},
        {"key":"hypernetwork_model","value":"","ignore":false},
        {"key":"lora_model","value":"","ignore":false},
        {"key":"sampler_name","value":"dpmpp_2m","ignore":false},
        {"key":"width","value":"1024","ignore":false},
        {"key":"height","value":"1024","ignore":false},
        {"key":"num_inference_steps","value":"25","ignore":false},
        {"key":"guidance_scale","value":"7.5","ignore":false},
        {"key":"prompt_strength","value":"0.8","ignore":false},
        {"key":"hypernetwork_strength","value":"1","ignore":false},
        {"key":"lora_alpha","value":"0.75","ignore":false},
        {"key":"output_format","value":"jpeg","ignore":false},
        {"key":"output_quality","value":"75","ignore":false},
        {"key":"output_lossless","value":false,"ignore":false},
        {"key":"negative_prompt","value":"","ignore":false},
        {"key":"stream_image_progress","value":false,"ignore":false},
        {"key":"use_face_correction","value":true,"ignore":false},
        {"key":"gfpgan_model","value":"GFPGANv1.3","ignore":false},
        {"key":"use_upscale","value":false,"ignore":false},
        {"key":"upscale_amount","value":"2","ignore":false},
        {"key":"block_nsfw","value":block_nsfw,"ignore":false},
        {"key":"show_only_filtered_image","value":true,"ignore":false},
        {"key":"upscale_model","value":"latent_upscaler","ignore":false},
        {"key":"preview-image","value":"portrait","ignore":false},
        {"key":"modifier-card-size-slider","value":"0","ignore":false},
        {"key":"theme","value":"theme-default","ignore":false},
        {"key":"save_to_disk","value":true,"ignore":false},
        {"key":"diskPath","value":"D:/StableDiffusion/output","ignore":false},
        {"key":"sound_toggle","value":true,"ignore":false},
        {"key":"vram_usage_level","value":"balanced","ignore":false},
        {"key":"confirm_dangerous_actions","value":true,"ignore":false},
        {"key":"metadata_output_format","value":"json","ignore":false},
        {"key":"auto_save_settings","value":true,"ignore":false},
        {"key":"apply_color_correction","value":false,"ignore":false},
        {"key":"process_order_toggle","value":false,"ignore":false},
        {"key":"thumbnail_size","value":"70","ignore":false},
        {"key":"auto_scroll","value":false,"ignore":false},
        {"key":"zip_toggle","value":true,"ignore":false},
        {"key":"tree_toggle","value":true,"ignore":false},
        {"key":"json_toggle","value":true,"ignore":false},
        {"key":"backend","value":"webui","ignore":false}
    ];

    let saved_settings = JSON.parse(localStorage.getItem('user_settings_v2'));
    
    let user_settings = saved_settings.map(setting => {
        let configItem = config.find(c => c.key === setting.key);
        setting.value = configItem ? configItem.value : setting.value;
        setting.ignore = configItem ? configItem.ignore : setting.ignore;
        
        return setting;
    });
    
    localStorage.setItem('user_settings_v2', JSON.stringify(user_settings));
    loadSettings();
    
    // Enforce NSFW filter
    blockNSFWField.checked = block_nsfw;
    
    // Enforce show filtered images only
    showOnlyFilteredImageField.checked = true
    
    // Enforce json meta format
    metadataOutputFormatField.value = 'json';
    
    // Limit interence steps to 25
    numInferenceStepsField.value = 25;
    
    // Disable live preview
    streamImageProgressField.checked = false;

    // Disable save settings
    saveSettingsBtn.remove();
    changeAppConfig = async function () { }
    saveSettings = function () { }
})();


