// import jenkins-auto-approve-script.groovy

job('Job-EntradasATuAlcance-Frontend') {
    description('Job Padre para crear la Tarea Hija que despliegue el Proyecto EntradasATuAlcance Frontend')
    scm {
        git('https://github.com/JMViiUDEZz/EntradasATuAlcance-Frontend.git', 'master') {
            node ->
                node / gitConfigName('JMViiUDEZz')
                node / gitConfigEmail('jmviudezp2003@gmail.com')
        }
    }
    triggers {
        //   scm('H/5 * * * *')
        githubPush()
    }
    steps {
        shell('bash docker.sh')
    }
}
