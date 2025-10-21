# Contributing Guidelines

Thank you for contributing to this AI resource repository! This document provides guidelines for adding and organizing content.

## How to Contribute

### 1. Adding New Projects

When adding a new AI/ML project:

- Create a new directory in `projects/` with a descriptive name
- Include a README.md with:
  - Project description and goals
  - Technologies used
  - Setup instructions
  - Usage examples
  - Results or findings
- Add a `requirements.txt` or equivalent for dependencies
- Document any configuration needed

### 2. Adding Notes

- Use markdown format for consistency
- Include clear titles and sections
- Add dates to time-sensitive content
- Link to external resources when relevant
- Use code blocks for code examples

### 3. Adding Resources

- Organize by topic or category
- Include brief descriptions of each resource
- Add date accessed for time-sensitive content
- Credit original authors/sources
- Check links are working

### 4. Working with Datasets

- **Never commit large dataset files directly**
- Instead, provide:
  - Links to download datasets
  - Dataset description and metadata
  - Data dictionary or schema
  - Preprocessing scripts
  - License information

### 5. Sharing Models

- For large model files, use Git LFS or external storage
- Include:
  - Model architecture description
  - Training details (hyperparameters, data used)
  - Performance metrics
  - Inference examples
  - Requirements for running the model

### 6. Adding Scripts

- Add clear comments explaining what the script does
- Include usage examples at the top
- List dependencies and requirements
- Make scripts reusable and configurable
- Test scripts before committing

### 7. Tool Configurations

- Document the tool and version
- Explain why the configuration is useful
- Include installation/setup steps
- Add screenshots if helpful

## File Naming Conventions

- Use lowercase with hyphens: `my-project-name`
- Use descriptive names: `sentiment-analysis` not `project1`
- Dates in YYYY-MM-DD format: `2024-03-15-notes.md`

## Code Quality

- Write clean, readable code
- Add comments for complex logic
- Follow language-specific style guides (PEP 8 for Python, etc.)
- Test your code before committing

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb: "Add", "Update", "Fix", "Remove"
- Example: "Add sentiment analysis project with BERT"

## Documentation

- Keep README files up to date
- Document any non-obvious decisions
- Include examples and usage instructions
- Link to related resources or papers

## Questions?

If you're unsure about how to contribute something, just add it in the most logical place with good documentation. The repository structure can evolve over time!
