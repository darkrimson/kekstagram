function isMeetingWithinWorkingHours(startOfWord, endOfWord, meetingStart, meetingDuration) {
    // Преобразуем время начала и конца рабочего дня в минуты
    let [startOfWordHours, startOfWordMinutes] = startOfWord.split(':').map(Number);
    let startOfWorkInMinutes = startOfWordHours * 60 + startOfWordMinutes;

    let [endOfWordHours, endOfWordMinutes] = endOfWord.split(':').map(Number);
    let endOfWorkInMinutes  = endOfWordHours * 60 + endOfWordMinutes;

    // Преобразуем время начала встречи в минуты
    let [meetingStartHours, meetingStartMinutes] = meetingStart.split(':').map(Number);
    let meetingStartInMinutes = meetingStartHours * 60 + meetingStartMinutes;

    // Вычисляем время окончания встречи
    let meetingEndInMinutes = meetingStartInMinutes + meetingDuration;
    
    // Проверяем, не выходит ли время окончания встречи за пределы рабочего дня
    return startOfWorkInMinutes <= meetingStartInMinutes && meetingEndInMinutes <= endOfWorkInMinutes ;
}