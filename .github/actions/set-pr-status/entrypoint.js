const { Toolkit } = require('actions-toolkit')

const tools = new Toolkit()

const { owner, repo } = tools.context.repo
const { sha } = tools.context
const { state, description } = tools.inputs

tools.github.repos
  .createCommitStatus({
    owner,
    repo,
    sha,
    state,
    description,
    target_url: `https://www.github.com/${owner}/${repo}/commit/${sha}/checks`,
  })
  .then(() => {
    tools.exit.success()
  })
  .catch((err) => {
    tools.log.fatal(err)
    tools.exit.failure()
  })
