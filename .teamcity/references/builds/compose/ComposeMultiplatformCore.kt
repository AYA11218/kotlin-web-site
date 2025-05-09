package references.builds.compose

import BuildParams
import common.ReferenceProject
import common.extensions.makeAPIReference

class ComposeMultiplatformCore(version: String, tagOrBranch: String) : ReferenceProject(BuildParams.COMPOSE_ID) {
    init {
        addReference(version) {
            makeAPIReference(
                version,
                gitUrl = "git@github.com:JetBrains/compose-multiplatform-core.git",
                gitBranch = tagOrBranch,
            )
        }
    }
}