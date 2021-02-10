export const convertDataForML = (userList, vacancy, threshold) => {
    const result = {};

    result.required_skills = vacancy.skills;
    result.candidates = userList;
    result.threshold = threshold;

    return result;
}
