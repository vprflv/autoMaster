'use server';

export async function sendToTelegram(formData: any) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error('Telegram credentials not set');
        return;
    }

    const message = `
 Новая заявка!

 Имя: ${formData.name}
 Телефон: ${formData.phone}
 Авто: ${formData.carModel || 'Не указано'}
 Услуга: ${formData.service || 'Не выбрано'}
 Сообщение: ${formData.message || '—'}
    `.trim();

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            }),
        });
    } catch (error) {
        console.error('Telegram error:', error);
    }
}