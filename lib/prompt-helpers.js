export const parseCodebaseFiles = (text) => {
  if (!text) return {};
  const regex = /<file\s+path="([^"]+)"[^>]*>([\s\S]*?)<\/file>/gi;
  const files = {};
  let match;
  while ((match = regex.exec(text)) !== null) {
    files[match[1]] = match[2].trim();
  }
  return files;
};

export const cleanMarkdownForDisplay = (text) => {
  if (!text) return "";
  return text.replace(/<file\s+path="([^"]+)"[^>]*>([\s\S]*?)<\/file>/gi, (match, path, code) => {
    const extension = path.split('.').pop() || '';
    const codeBlockLang = ['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'json', 'py', 'sh', 'rust'].includes(extension) ? extension : '';
    return `\n**File: \`${path}\`**\n\`\`\`${codeBlockLang}\n${code.trim()}\n\`\`\`\n`;
  });
};

export const buildFileTree = (files) => {
  const tree = {};
  Object.keys(files).forEach((filePath) => {
    const parts = filePath.split('/');
    let current = tree;
    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = {
          name: part,
          path: parts.slice(0, index + 1).join('/'),
          isFolder: index < parts.length - 1,
          children: {}
        };
      }
      current = current[part].children;
    });
  });
  return tree;
};

export const validateFileTags = (text) => {
  if (!text) return { isValid: true, errors: [] };
  const errors = [];
  
  const openCount = (text.match(/<file\b/gi) || []).length;
  const closeCount = (text.match(/<\/file>/gi) || []).length;
  
  if (openCount !== closeCount) {
    errors.push(`Mismatched tags: found ${openCount} opening '<file>' tags but ${closeCount} closing '</file>' tags.`);
  }
  
  const tagsWithoutPath = [];
  const openTagRegex = /<file\b[^>]*>/gi;
  let match;
  while ((match = openTagRegex.exec(text)) !== null) {
    const tagContent = match[0];
    if (!/path="[^"]+"/.test(tagContent)) {
      tagsWithoutPath.push(tagContent);
    }
  }
  if (tagsWithoutPath.length > 0) {
    errors.push(`Missing 'path' attribute: ${tagsWithoutPath.length} tag(s) like '${tagsWithoutPath[0]}' are missing a valid path="filename" attribute.`);
  }

  const pathCounts = {};
  const duplicatePaths = [];
  const pathRegex = /<file\s+path="([^"]+)"[^>]*>/gi;
  let pathMatch;
  while ((pathMatch = pathRegex.exec(text)) !== null) {
    const p = pathMatch[1];
    pathCounts[p] = (pathCounts[p] || 0) + 1;
    if (pathCounts[p] === 2) {
      duplicatePaths.push(p);
    }
  }
  if (duplicatePaths.length > 0) {
    errors.push(`Duplicate file paths detected: '${duplicatePaths.join("', '")}'.`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
