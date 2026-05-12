async function generateAIContent(prompt) {
  return {
    success: true,
    result: `Generated content for: ${prompt}`
  };
}

module.exports = {
  generateAIContent
};
