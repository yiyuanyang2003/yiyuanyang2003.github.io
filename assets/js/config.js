// assets/js/config.js

// 这里填你的真实 Key
const SUPABASE_URL = 'https://tjvzdlecdlukiovefuli.supabase.co';
const SUPABASE_KEY = 'sb_publishable_fPIRRu-i8BLh3FW5SDKzmQ_zCKvbsjk';

// 初始化客户端
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 可以在控制台打印一下，确认加载成功

console.log('Supabase 已在 config.js 中初始化');
