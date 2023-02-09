// import jenkins-auto-approve-script.groovy

job('Job-EntradasATuAlcance') {
    description('Job Padre para crear la Tarea Hija que despliegue el Proyecto EntradasATuAlcance')
    scm {
        git('https://github.com/JMViiUDEZz/HLC-AltaDisponibilidad.git', 'master') {
            node ->
                node / gitConfigName('JMViiUDEZz')
                node / gitConfigEmail('JMViiUDEZz@gmail.com')
        }
    }
    triggers {
        //   scm('H/5 * * * *')
        githubPush()
    }
    steps {
        shell('bash /build/install.sh')
    }
}
