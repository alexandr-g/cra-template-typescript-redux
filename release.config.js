module.exports = {
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: 'v${version}',
  branch: 'master',
  prepare: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: 'Changelog',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md',
        ],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    '@semantic-release/github',
  ],
}
