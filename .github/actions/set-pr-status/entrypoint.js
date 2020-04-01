const { Toolkit } = require('actions-toolkit')

const tools = new Toolkit()

const { owner, repo } = tools.context.repo
const { sha } = tools.context
const { status, message, context } = tools.inputs

tools.github.repos
  .createStatus({
    owner,
    repo,
    sha,
    state: status,
    description: message,
    context,
    target_url: `https://www.github.com/${owner}/${repo}/commit/${sha}/checks`,
  })
  .then(() => {
    tools.exit.success()
  })
  .catch((err) => {
    tools.log.fatal(err)
    tools.exit.failure()
  })
