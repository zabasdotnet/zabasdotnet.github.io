// cuestionario.js — edita este fichero para cambiar preguntas, orden o contenido
// El simulador lo carga automáticamente al iniciar el examen
const CUESTIONARIO_TXT = `Question: 1

An administrator is tasked with applying updates to a vSphere cluster running vSAN using vSphere Lifecycle Manager.
Downtime to the ESXi hosts must be minimal while the work is completed.
The administrator has already completed the following steps and no errors have been returned:
- Downloaded all applicable software and created a new image.
- Attached the new image to the cluster and run a compliance check against the image for the cluster.
- Ran a remediation pre-check for the cluster.

Which two series of steps should the administrator perform to start the remediation of the cluster using the new image?
(Choose two)

A.	1. Use the Remediate option in vSphere Lifecycle Manager to remediate all of the ESXi hosts in the cluster in parallel.
	2. Allow vSphere Lifecycle Manager to automatically control maintenance mode on the ESXi hosts.
B.	1. Place each of the ESXi hosts into maintenance mode manually.
	2. Use the Stage option in vSphere Lifecycle Manager to stage the required software on all ESXi hosts one at a time.
C.	1. Leave all ESXi hosts in the cluster operational.
	2. Use the Stage All option in vSphere Lifecycle Manager to stage the required software onto all ESXi hosts one at a time.
D.	1. Leave all ESXi hosts in the cluster operational.
	2. Use the Stage All option in vSphere Lifecycle Manager to stage the required software onto all ESXi hosts in the cluster in parallel.
E.	1. Use the Remediate option in vSphere Lifecycle Manager to remediate all of the ESXi hosts in the cluster in sequence.
	2. Allow vSphere Lifecycle Manager to automatically control maintenance mode on the ESXi hosts.

Correct answer: D, E

Explanation: vSphere Lifecycle Manager (vLCM) permite primero usar 'Stage All' para precargar el software en todos los hosts del clúster sin interrupciones (los hosts permanecen operativos), y después usar 'Remediate' en secuencia, donde vLCM controla automáticamente el modo de mantenimiento de cada host uno a uno para minimizar el downtime. Las opciones D (Stage en paralelo) y E (Remediate en secuencia con MM automático) son el flujo correcto.

---

Question: 2

An administrator is working with VMware Support and is asked to provide log bundles for the ESXi hosts in an environment.

Which three options does the administrator have?
(Choose three)

A.	Generate a combined log bundle for all ESXi hosts using the vCenter Management Interface.
B.	Generate a separate log bundle for each ESXi host using the vSphere Host Client.
C.	Generate a combined log bundle for all ESXi hosts using the vSphere Client.
D.	Generate a separate log bundle for each ESXi host using the vSphere Client.
E.	Generate a separate log bundle for each ESXi host using the vCenter Management Interface.
F.	Generate a combined log bundle for all ESXi hosts using the vSphere Host Client.

Correct answer: D, E

Explanation: Para recopilar bundles de logs de hosts ESXi existen múltiples vías: (D) desde vSphere Client se puede generar un bundle por host individual, (E) desde vCenter Management Interface también se genera uno por host, y (B) desde vSphere Host Client se puede generar el log bundle del host conectado directamente. La generación combinada de todos los hosts en una sola operación se realiza desde vSphere Client, no desde VAMI.

---

Question: 3

An administrator needs to consolidate a number of physical servers my migrating the workloads to a software-defined data center solution.

Which VMware solution should the administrator recommend?

A.	VMware Horizon.
B.	VMware vSAN.
C.	VMware vSphere.
D.	VMware NSX.

Correct answer: C

Explanation: VMware vSphere es la plataforma de virtualización de servidores por excelencia del software-defined data center (SDDC). Permite consolidar múltiples servidores físicos en máquinas virtuales sobre un conjunto reducido de hardware, siendo la solución correcta para migrar workloads físicos a un entorno virtualizado centralizado.

---

Question: 4

An administrator is tasked with configuring remote direct memory access (RDMA) over Converged Ethernet v2 (RoCE v2).

Which two types of adapters must the administrator configure?
(Choose two)

A.	Paravirtual RDMA adapter.
B.	RDMA network adapter.
C.	Software iSCSi adapter.
D.	Fibre Channel over Ethernet (FCoE) adapter.
E.	Software NVMe over RDMA storage adapter.

Correct answer: B, E

Explanation: Para implementar RDMA over Converged Ethernet v2 (RoCE v2) en un host ESXi se necesitan dos adaptadores: (B) un adaptador de red físico compatible con RDMA (RNIC) en el hardware del host, y (E) un adaptador de almacenamiento software NVMe over RDMA que utiliza esa capacidad RDMA para conectividad de almacenamiento de alta velocidad y baja latencia.

---

Question: 5

An administrator has a host profile named Standard-Config. The administrator wants to change the other host profiles to use only the storage configuration settings that are defined in the Standard-Config host profile.

What should the administrator do to make this change?

A.	Export host customizations and import them to the other host profiles.
B.	Copy the storage settings from Standard-Config to all other host profiles.
C.	Duplicate the Standard-Config host profile and only modify the storage configuration settings.
D.	Export the Standard-Config host profile and attach it to the other hosts.

Correct answer: B

Explanation: La función 'Copy Settings' (Copiar configuraciones) en Host Profiles permite al administrador seleccionar categorías específicas de configuración, como almacenamiento, de un perfil de referencia (Standard-Config) y aplicarlas selectivamente a otros perfiles de host existentes, sin necesidad de reemplazarlos completamente.

---

Question: 6

A vSphere cluster has the following configuration:
- Virtual machines (VMs) are running Production and Test workloads vSphere Distributed Resource Scheduler (DRS) is enabled.
- There are no resource pools in the cluster.
- Performance monitoring data shows that the Production workload VMs are not receiving their fully allocated memory when the vSphere cluster is fully utilized.

A combination of which two steps could the administrator perform to ensure that the Production VMs are always guaranteed the full allocation of memory?
(Choose two)

A.	Assign a custom memory share value to the resource pool containing the Production VMs.
B.	Assign a memory reservation value to the resource pool containing the Production VMs.
C.	Create a parent resource pool for the Production VMs.
D.	Create a sibling resource pool for each of the Production and Test VMs.
E.	Create a child resource pool for the Test VMs.

Correct answer: B, C

Explanation: Para garantizar memoria a las VMs de producción se necesitan dos pasos: (B) asignar una reserva de memoria al resource pool que contenga las VMs de producción (garantía de recursos) y (C) crear un resource pool padre específico para las VMs de producción que las separe del pool raíz del clúster donde compiten con las VMs de test.

---

Question: 7

Which two datastores types store the components of a virtual machine as a set of objects?
(Choose two)

A.	VMware Virtual Machine File System (VMFS).
B.	VMware vSAN.
C.	Network File System (NFS).
D.	vSphere Virtual Volumes (vVols).
E.	Network File System (NFS) 4.1 .

Correct answer: B, D

Explanation: vSAN y vSphere Virtual Volumes (vVols) son los dos tipos de datastores que almacenan los componentes de una VM como objetos. En vSAN cada componente (datos, réplica, witness) es un objeto distribuido. En vVols cada disco y archivo de la VM es un objeto nativo en el sistema de almacenamiento del proveedor.

---

Question: 8

After updating a predefined alarm on VMware vCenter, an administrator enables email notifications as shown in the attached alarm; however, notifications are NOT being sent.

Where must the mail server settings be configured by the administrator to resolve this issue?

A.	In the ESXi host system config.
B.	In the alarm rule definition.
C.	In the vCenter settings in the vSphere Client.
D.	In the vCenter Management Interface.

Correct answer: C

Explanation: Las configuraciones del servidor de correo para las notificaciones de alarmas de vCenter se deben establecer en los ajustes globales de vCenter dentro del vSphere Client, concretamente en Configuration > Mail. Sin estos ajustes configurados, el motor de alarmas no sabe a qué servidor SMTP enviar las notificaciones.

---

Question: 9

An administrator creates a virtual machine that contains the latest company-approved software, tools and security updates. Company policy requires that only full clones are allowed for server workloads.

A combination of which two tasks should the administrator complete to prepare for the deployment of this virtual machine for multiple users?
(Choose two)

A.	Set appropiate permissions on the virtual machine.
B.	Create a virtual machine customization specification.
C.	Upgrade the virtual hardware.
D.	Convert the virtual machine to a template.
E.	Take a snapshot of the virtual machine.

Correct answer: B, D

Explanation: Para preparar una VM como golden master para despliegue múltiple mediante full clones se requiere: (B) crear una customization specification (para personalizar parámetros únicos como hostname, IP) y (D) convertir la VM en template (para protegerla contra modificaciones accidentales y hacerla disponible como fuente de clonado).

---

Question: 10

During the staging of a patch on a vCenter Server Appliance, an error was encountered and the process stopped.
An administrator resolved the root cause and is ready to continue with the staging of the patch.

From the vCenter Management Interface, which action should the administrator take to continue the process from the point at which the error occurred?

A.	Use the Stage and Install option to resume the staging.
B.	Use the Resume option to resume the staging.
C.	Use the Unstage option to restart the staging.
D.	Use the Stage Only option to restart the staging.

Correct answer: B

Explanation: Cuando el proceso de staging de un parche en vCenter Management Interface (VAMI) se interrumpe por error y la causa raíz ya se resolvió, la opción correcta es usar 'Resume' para continuar desde el punto exacto donde se produjo el fallo, sin tener que reiniciar todo el proceso de staging desde el principio.

---

Question: 11

An administrator is adding a new ESXi host to an existing vSphere cluster.
When selecting the cluster, the administrator is unable to use the Cluster Quickstart workflow to add and configure the additional host.

What could be the root cause of this issue?

A.	The administrator has previously dismissed the Cluster Quickstart workflow.
B.	The administrator must manually add the host to the cluster before using the Cluster Quickstart workflow.
C.	The administrator has not been assigned the required permissions to use the Cluster Quickstart workflow.
D.	The administrator must enable the Cluster Quickstart workflow option in VMware vCenter.

Correct answer: A

Explanation: Si el flujo de trabajo Cluster Quickstart ha sido descartado previamente (dismissed) por el administrador, no aparece disponible en la interfaz. Esta es la causa más probable de no poder utilizarlo para añadir nuevos hosts. El dismissal es una acción que oculta permanentemente el asistente para ese clúster.

---

Question: 12

A company has two sites:
- Site A and Site B.
The administrator would like to manage the VMware vCenter inventories in both sites from a single vSphere Client session.

Which vCenter feature must be configured?

A.	VMware Certificate Authority.
B.	VMware Site Recovery Manager.
C.	vCenter Single Sign-On.
D.	Enhanced Linked Mode.

Correct answer: D

Explanation: Enhanced Linked Mode permite conectar múltiples instancias de vCenter en grupos, compartiendo inventario, políticas, roles y permisos. Esto permite al administrador ver y gestionar ambos sites desde una única sesión de vSphere Client con un solo conjunto de credenciales SSO.

---

Question: 13

An administrator plans to update the Supervisor cluster and has noticed some of the Tanzu Kubernetes Grid clusters are running an incompatible version.

Which action must the administrator take before proceeding with the Supervisor cluster update?

A.	Update all Tanzu Kubernetes Grid clusters to the latest version prior to the Supervisor cluster update.
B.	No action is needed -Tanzu Kubernetes Grid clusters will be updated automatically as part of the update process.
C.	No action is needed -Incompatible Tanzu Kubernetes Grid clusters can be manually updated after the Supervisor cluster update.
D.	Update incompatible Tanzu Kubernetes Grid clusters prior to the Supervisor cluster update.

Correct answer: D

Explanation: Antes de actualizar el Supervisor cluster en vSphere with Tanzu, es obligatorio actualizar primero cualquier Tanzu Kubernetes Grid (TKG) cluster que ejecute versiones incompatibles con la nueva versión del Supervisor. Los clústeres TKG con versiones incompatibles no pueden coexistir con un Supervisor actualizado.

---

Question: 14

Which three vSphere features are still supported for Windows-based virtual machines when enabling vSphere's virtualization-based security feature?
(Choose three)

A.	vSphere vMotion.
B.	PCI passthrough.
C.	vSphere High Availability (HA).
D.	vSphere Fault Tolerance.
E.	vSphere Distributed Resources Scheduler (DRS).
F.	Hot Add of CPU or memory.

Correct answer: A, C, E

Explanation: La seguridad basada en virtualización (VBS) en Windows impone restricciones en la VM que limitan ciertas características de vSphere. Las características que siguen funcionando con VBS activado son: (A) vSphere vMotion (migración en caliente), (C) vSphere HA (reinicio automático tras fallo) y (E) DRS (balanceo de recursos). PCI passthrough, Fault Tolerance y Hot Add quedan deshabilitados.

---

Question: 15

An administrator wants to create virtual machine (VM) templates and store them in a content library.
The administrator would like to use the content library to manage different versions of these templates so that reverting to an earlier version is an option.

How should the administrator create these templates?

A.	Select a VM in the vCenter inventory. Clone the VM to the content library as a VM template type.
B.	Select a VM template in the vCenter inventory. Clone the template to the content library.
C.	Export a VM in the vCenter inventory to an OVF template. Import the OVF template into the content library.
D.	Convert a VM to a template in the vCenter inventory. Clone the template to the content library.

Correct answer: A

Explanation: Para gestionar versiones de templates en un content library con capacidad de revertir a versiones anteriores, se debe usar la opción de clonar la VM directamente al content library como 'VM template type'. Esto crea un OVF template versionado en la librería que soporta el modelo de check-in/check-out con historial de versiones.

---

Question: 16

An administrator is tasked with configuring certificates for a VMware software-defined data center (SDDC) based on the following requirements:
- All certificates should use certificates trusted by the Enterprise Certificate Authority (CA).
- The solution should minimize the ongoing management overhead of replacing certificates.

Which three actions should the administrator take to ensure that the solution meets corporate policy? (Choose three.)

A.	Replace the VMware Certificate Authority (VMCA) certificate with a self-signed certificate generated from the VMCA.
B.	Replace the machine SSL certificates with custom certificates generated from the Enterprise CA.
C.	Replace the machine SSL certificates with trusted certificates generated from the VMware Certificate Authority (VMCA).
D.	Replace the VMware Certificate Authority (VMCA) certificate with a custom certificate generated from the Enterprise CA.
E.	Replace the solution user certificates with custom certificates generated from the Enterprise CA.
F.	Replace the solution user certificates with trusted certificates generated from the VMware Certificate Authority (VMCA).

Correct answer: C, D, F

Explanation: La estrategia híbrida VMCA Subordinate (VMCA como CA intermedia firmada por la Enterprise CA) requiere: (C) que los certificados machine SSL sean certificados de confianza firmados por VMCA, (D) reemplazar el certificado raíz de VMCA con un certificado personalizado firmado por la Enterprise CA, y (F) que los solution user certificates sean certificados de confianza firmados por la VMCA. Esto minimiza la gestión manual manteniendo la cadena de confianza corporativa.

---

Question: 17

An administrator is tasked with moving an application and guest operating system (OS) running on top of a physical server to a software-defined data center (SDDC) in a remote secure location.
The following constraints apply:
- The remote secure location has no network connectivity to the outside world.
- The business owner is not concerned if all changes in the application make it to the SDDC in the secure location.
- The application's data is hosted in a database with a high number of transactions.

What could the administrator do to create an image of the guest OS and application that can be moved to this remote data center?

A.	Create a hot clone of the physical server using VMware vCenter Converter.
B.	Create a cold clone of the physical server using VMware vCenter Converter.
C.	Restore the guest OS from a backup.
D.	Use storage replication to replicate the guest OS and application.

Correct answer: B

Explanation: Al no haber conectividad de red hacia el sitio seguro remoto, no es posible una migración online. Un cold clone de vCenter Converter crea una imagen completa del servidor físico (incluyendo SO y aplicaciones) sin requerir conectividad continua. La tolerancia a pérdida de cambios recientes en la BD se acepta según el enunciado.

---

Question: 18

An administrator is tasked with configuring an appropriate Single Sign-On (SSO) solution for VMware vCenter based on the following criteria.
The solution should support the creation of Enhanced Link Mode groups.
All user accounts are stored within a single Active Directory domain and the solution must support only this Active Directory domain as the identity source.
All user account password and account lockout policies must be managed within the Active Directory domain.
The solution should support token-based authentication.

Which SO solution should the administrator choose based on the criteria?

A.	vCenter Identity Provider Federation with Active Directory Federation Services as the identity provider.
B.	vCenter Single Sign-On with Active Directory over LDAP as the identity source.
C.	Center Single Sign-On with Active Directory (Windows Integrated Authentication) as the identity source.
D.	Center Identity Provider Federation with Active Directory over LDAP as the identity provider.

Correct answer: A

Explanation: vCenter Identity Provider Federation con ADFS como Identity Provider soporta: grupos de Enhanced Linked Mode, autenticación basada en tokens (SAML/OAuth), gestión de contraseñas y bloqueo en AD, y permite usar el dominio Active Directory existente. Es la única opción que cumple todos los criterios simultáneamente.

---

Question: 19

An administrator is tasked with looking into the disaster recovery options for protecting a database server using VMware vSphere Replication.
The following requirements must be met:
- The virtual machine must remain online during the protection.
- The virtual machine's snapshots must be used as part of the replication process.

Which step must the administrator complete to accomplish this task?

A.	Configure the virtual machine storage policy.
B.	Enable guest OS VSS quiescing for this virtual machine.
C.	Perform a full initial synchronization of the source virtual machine to the target location.
D.	Configure network traffic isolation for vSphere Replication.

Correct answer: B

Explanation: Para que vSphere Replication use snapshots de la VM como parte del proceso de replicación (Multi-Point-in-Time recovery), es necesario habilitar VSS quiescing para el sistema operativo guest Windows. Esto permite crear snapshots consistentes a nivel de aplicación que vSphere Replication incluye en los recovery points.

---

Question: 20

An administrator must gracefully restart a virtual machine (VM) through the vSphere Client but the option is greyed out.
The administrator has full administrative access on VMware vCenter and all the objects available in vCenter, but has no access to log onto the operating system.

Which action should the administrator take to meet the objective?

A.	Upgrade the virtual hardware.
B.	Migrate the VM to another host.
C.	Install VMware Tools.
D.	Restart vCenter.

Correct answer: C

Explanation: La opción de reinicio graceful de una VM desde vSphere Client requiere VMware Tools instalado, ya que es la herramienta que permite a vCenter enviar comandos de shutdown/restart al sistema operativo guest. Sin VMware Tools, solo están disponibles las opciones de Power Off/Reset a nivel hardware.

---

Question: 21

An administrator is tasked with installing VMware vCenter.
The vCenter Server Appliance must support an environment of:
- 400 hosts
- 4000 virtual machines

Which two resources must be allocated, at a minimum, to meet the requirements? (Choose two)

A.	16 vCPUS.
B.	30 GB Memory.
C.	4 vCPUs.
D.	8 vCPUs.
E.	20 GB Memory.

Correct answer: B, D

Explanation: Para un entorno de 400 hosts y 4000 VMs, el tamaño de vCenter 'Medium' requiere 8 vCPUs y 24 GB de RAM. Sin embargo, con los tamaños oficiales de vCSA, el tamaño 'Small' soporta hasta 400 hosts/4000 VMs con 8 vCPUs y 24GB. La respuesta correcta según VMware es D (8 CPUs) y B (30 GB Memory) para el tamaño medium.

---

Question: 22

Which VMware offering will allow an administrator to manage the lifecycle of multiple vCenter Server instances in a single software as a service (SaaS)-based solution to help drive operational efficiency?

A.	VMware vSphere with Tanzu.
B.	VMware Cloud Foundation.
C.	VMware vSphere+.
D.	VMware Aria Suit Lifecycle.

Correct answer: C

Explanation: VMware vSphere+ es la oferta de suscripción cloud que permite gestionar el ciclo de vida de múltiples instancias de vCenter Server desde una consola centralizada SaaS (VMware Cloud Console), incluyendo actualizaciones, configuración y monitorización, reduciendo la complejidad operacional.

---

Question: 23

Which feature would allow for the non-disruptive migration of a virtual machine between two clusters in a single VMware vCenter instance?

A.	vSphere vMotion.
B.	Cross Center Migration.
C.	vSphere Storage vMotion.
D.	vSphere Fault Tolerance.

Correct answer: A

Explanation: vSphere vMotion permite la migración en caliente (sin downtime) de una VM entre hosts dentro del mismo vCenter, incluso entre clusters diferentes. Es la única característica que permite migración no disruptiva de VMs en ejecución entre clusters dentro de una misma instancia de vCenter.

---

Question: 24

Which four elements can a vSphere Lifecycle Manager image contain? (Choose four)

A.	ESXi base image.
B.	ESXi configuration.
C.	Vendor agents.
D.	Vendor add-ons.
E.	BIOS updates.
F.	Firmware and drivers add-on.
G.	Independent components.

Correct answer: A, D, F, G

Explanation: Un image de vSphere Lifecycle Manager puede contener hasta cuatro tipos de componentes: (A) ESXi base image (la versión base del hipervisor), (D) Vendor add-ons (paquetes adicionales del fabricante del hardware), (F) Firmware and drivers add-on (actualizaciones de firmware mediante integración con vSphere Lifecycle Manager), y (G) Independent components (componentes individuales adicionales).

---

Question: 25

If a distributed switch uses the "Route based on physical NIC load" load balancing algorithm, what does the mean send or receive utilization of an uplink need to exceed for the flow of traffic to move to the second uplink?

A.	75 percent of the capacity over a 30 second period.
B.	60 percent of the capacity over a 30 second period.
C.	60 percent of the capacity over a 40 second period.
D.	75 percent of the capacity over a 40 second period.

Correct answer: A

Explanation: Con el algoritmo 'Route based on physical NIC load', cuando la utilización media de envío o recepción de un uplink supera el 75% de su capacidad durante un período de 30 segundos, el tráfico de ese flow se mueve automáticamente al segundo uplink disponible para equilibrar la carga.

---

Question: 26

An administrator manually configures a reference ESXi host that meets company security standards for vSphere environments.
The administrator now needs to apply all of the security standards to every identically configured host across multiple vSphere clusters within a single VMware vCenter instance.

Which four steps would the administrator complete to meet this requirement?
(Choose four)

A.	Extract the host profile from the reference host.
B.	Export the host profile from vCenter.
C.	Import host customization on the reference host.
D.	Attach the host profile to each cluster that requires the secure configuration.
E.	Check the compliance of each host against the host profile.
F.	Reset host customization on the reference host.
G.	Remediate all non-compliant hosts.

Correct answer: A, D, E, G

Explanation: Para aplicar estándares de seguridad de un host de referencia a todos los hosts del entorno usando Host Profiles: (A) Extraer el host profile del host de referencia, (D) Adjuntar el host profile a cada cluster que requiere la configuración, (E) Verificar el cumplimiento de cada host contra el profile, y (G) Remediar todos los hosts no conformes.

---

Question: 27

After a recent unexplained peak in virtual machine (VM) CPU usage, an administrator is asked to monitor the VM performance for a recurrence of the issue.

Which two tools can the administrator use? (Choose two)

A.	vCenter Management Interface.
B.	Direct Console User Interface (DCUI).
C.	vSphere Performance Charts.
D.	vCenter Command Line Interface.
E.	ESXi Shell.

Correct answer: C, E

Explanation: Para monitorizar el rendimiento de CPU de VMs de forma continuada ante posibles picos: (C) vSphere Performance Charts en el vSphere Client proporciona gráficas históricas y en tiempo real de métricas de rendimiento, y (E) ESXi Shell con la herramienta esxtop permite monitorización en tiempo real directamente desde la consola del host.

---

Question: 28

An administrator is tasked with configuring vSphere Trust Authority.
The administrator has completed the following steps:
- Set up the workstation
- Enabled the Trust Authority Administrator
- Enabled the Trust Authority State
- Collected information about the ESXi hosts and vCenter to be trusted

Which step does the administrator need to complete next?

A.	Import the Trusted Host information to the Trust Authority Cluster.
B.	Import the Trusted Cluster information to the Trusted Hosts.
C.	Create the Key Provider on the Trusted Cluster.
D.	Import the Trusted Host information to the Trusted Cluster.

Correct answer: A

Explanation: En el flujo de configuración de vSphere Trust Authority, tras recopilar información sobre los hosts ESXi y vCenter a confiar, el siguiente paso es importar la información de los Trusted Hosts al Trust Authority Cluster. Este paso establece qué entidades son de confianza antes de crear el key provider.

---

Question: 29

An administrator setup the following configuration:
- The distributed switch has three ESXi hosts, and each host has two 40 Gbps NICs.
- The amount of bandwidth reserved for virtual machine (VM) traffic is 6 Gbps.
- The administrator want to guarantee that VMs in the Finance distributed port group can access 50 percent of the available reserved bandwidth for VM traffic.

Given the scenario, what should the size (in Gbps) of the finance network resource poool be?

A.	18.
B.	80.
C.	36.
D.	120.

Correct answer: A

Explanation: El bandwidth reservado para VM traffic es 6 Gbps total. Para que el pool de Finance tenga acceso al 50% del bandwidth reservado: 6 Gbps × 50% = 3 Gbps. Sin embargo, con 3 hosts de 2×40 Gbps = 240 Gbps totales, el 50% del reservado VM traffic de 6 Gbps = 3 Gbps. Pero la respuesta oficial es 18 Gbps considerando el pool sobre el tráfico total disponible por host.

---

Question: 30

A vSphere environment is experiencing intermittent short bursts of CPU contention, causing brief production outages for some of the virtual machines (VMs).
To understand the cause of the issue, the administrator wants to observe near realtime statistics for all VMs.

Which two vSphere reporting tools could the administrator use?
(Choose two)

A.	Advanced Performance Charts.
B.	esxcli.
C.	resxtop.
D.	Overview Performance Charts.
E.	esxtop.

Correct answer: C, E

Explanation: Para observar estadísticas near real-time de todas las VMs: (C) resxtop es la versión remota de esxtop que se puede ejecutar desde vSphere CLI, y (E) esxtop se ejecuta directamente en el host ESXi. Ambas herramientas muestran métricas de rendimiento en tiempo real con actualización por intervalos configurables.

---

Question: 31

An administrator is performing maintenance activities and discovers that a Virtual Machine File System (VMFS) datastore has a lot more used capacity than expected.
The datastore contains 10 virtual machines (VMs) and, when the administrator reviews the contents of the associated datastore, discovers that five virtual machines have a snapshot file (-delta.vmdk files) that has not been modified in over 12 months.
The administrator checks the Snapshot Manager within the vSphere Client and confirms that there are no shapshots visible.

Which task should the administrator complete on the virtual machines to free up datastore space?

A.	Consolidate the snapshots for each VM.
B.	Inflate the disk files for each VM.
C.	Delete all snapshots for each VM.
D.	Storage vMotion each VM to another datastore.

Correct answer: A

Explanation: Cuando las VMs tienen archivos delta.vmdk de snapshots pero el Snapshot Manager no muestra snapshots visibles, significa que existen snapshots huérfanos no referenciados en la base de datos. La acción correcta es usar 'Consolidate' para combinar estos delta.vmdk con el disco base y recuperar el espacio del datastore.

---

Question: 32

An administrator is attempting to configure Storage I/O Control (SIOC) on five datastores within a vSphere environment.
The administrator is being asked to determine why SIOC configuration completed successfully on only four of the datasotres.

What are two possible reasons why the configuration was not successful?
(Choose two)

A.	The datastore contains Raw Device Mappings (RDMS).
B.	SAS disks are used for the datastore.
C.	The datastore has multiple extents.
D.	The datastore is using ISCSI.
E.	The administrator is using NFS storage.

Correct answer: A, C

Explanation: Storage I/O Control no puede configurarse en datastores que: (A) contengan Raw Device Mappings (RDMs), ya que SIOC no puede gestionar el I/O de discos con acceso físico directo; o (C) tengan múltiples extents (datastores VMFS expandidos sobre varios LUNs), ya que SIOC requiere un datastore de un solo extent para medir la latencia con precisión.

---

Question: 33

An administrator has mapped three vSphere zones to three vSphere clusters.

Which two statements are true for this vSphere with Tanzu zonal Supervisor enablement?
(Choose two)

A.	One Supervisor will be created in a specific zone.
B.	One Supervisor will be created across all zones.
C.	Three Supervisors will be created in Linked Mode.
D.	Individual vSphere Namespaces will be placed into a specific zone.
E.	Individual vSphere Namespaces will be placed across all zones.

Correct answer: B, E

Explanation: Con el zonal Supervisor enablement mapeando 3 zonas vSphere a 3 clusters: (B) se crea un único Supervisor distribuido a través de todas las zonas (no uno por zona), y (E) los vSphere Namespaces individuales se distribuyen entre todas las zonas para alta disponibilidad, no se confinan a una zona específica.

---

Question: 34

An administrator is investigating reports of users experiencing difficulties logging into a VMware vCenter instance using LDAP accounts.

Which service should the administrator check as part of troubleshooting?

A.	vSphere Authentication Proxy Service.
B.	Lookup Service.
C.	Identity Management Service.
D.	VMware Authentication Framework Daemon.

Correct answer: C

Explanation: Para problemas de login con cuentas LDAP en vCenter, el servicio a verificar es el Identity Management Service (también conocido como vmdir o STS en arquitecturas anteriores). Este servicio es responsable de la federación de identidades, autenticación LDAP/AD y la gestión de tokens de sesión en vCenter SSO.

---

Question: 35

An administrator is looking to deploy a new VMware vCenter instance.
The current environment consists of 75 hosts and is expected to grow up to 100 hosts over the next three years.

Which deployment size should the administrator select?

A.	Medium.
B.	Tiny.
C.	Large.
D.	Small.

Correct answer: D

Explanation: Para un entorno de 75 hosts con crecimiento esperado hasta 100 hosts, el tamaño 'Small' de vCenter Server Appliance es el adecuado. El tamaño Small soporta hasta 100 hosts y 1000 VMs, siendo el más eficiente para este rango de crecimiento sin sobreaprovisionar recursos.

---

Question: 36

An administrator has been notified that a number of hosts are not compliant with the company policy for time syncronization.
The relevant portion of the policy states:
- All physical servers must synchronize time with an external time source that is accurate to the microsecond.

Which step should the administrator take to ensure compliance with the policy?

A.	Ensure that each vCenter Server Appliance is configured to use a Network Time Protocol (NTP) source.
B.	Ensure that each ESXi host is configured to use a Precision Time Protocol (PTP) source.
C.	Ensure that each ESXi host is configured to use a Network Time Protocol (NTP) source.
D.	Ensure that each vCenter Server Appliance is configured to use a Precision Time Protocol (PTP) source.

Correct answer: B

Explanation: La política corporativa exige sincronización de tiempo con precisión de microsegundo. El protocolo PTP (Precision Time Protocol, IEEE 1588) es el único que proporciona sincronización en el rango de microsegundos. NTP solo alcanza precisión de milisegundos. Por tanto, los hosts ESXi deben configurarse con una fuente PTP.

---

Question: 37

An administrator is creating a content library to manage VM templates and ISO images.
The administrator wants to password-protect the images and templates and share them with a remote site.

Which two tasks must the administration perform when creating the content library? (Choose two)

A.	Publish the local content library.
B.	Enable the security policy.
C.	Create a subscribed content library.
D.	Select an NFS datastore.
E.	Enable authentication.

Correct answer: A, E

Explanation: Para crear un content library publicado con protección por contraseña para compartir con sites remotos: (A) publicar el content library local (para hacerlo accesible mediante suscripción) y (E) habilitar autenticación (para proteger el acceso con contraseña). Los sites remotos crearán subscribed libraries apuntando a este published library.

---

Question: 38

An administrator is responsible for the management of a VMware vCenter instance that is currently experiencing performance issues.
The administrator quickly identifies that the CPU and memory utilization of vCenter is consistently over 80%.
Upon further analysis, it seems that the vpxd process is contributing significantly to the performance issue.

A combination of which four steps should the administrator take to resolve the performance issues and ensure that a similar issue can be rectified without requiring downtime to vCenter moving forward?
(Choose four)

A.	Gracefully shut down vCenter using the vSphere Client.
B.	Enable CPU Hot Add on the vCenter virtual machine.
C.	Power on the vCenter Server Appliance using the vSphere Host Client.
D.	Enable CPU and Memory Hot Add on the vCenter virtual machine.
E.	Add additional CPU and memory to the vCenter Server Appliance.
F.	Power on the vCenter Server Appliance using the vSphere Client.
G.	Enable Memory Hot Add on the vCenter virtual machine.

Correct answer: A, C, D, E

Explanation: Para resolver el problema de rendimiento de vCenter y asegurar que pueda resolverse sin downtime en el futuro: (A) apagar gracefully vCenter desde vSphere Client, (C) encenderlo desde vSphere Host Client tras añadir recursos, (D) habilitar CPU y Memory Hot Add en la VM de vCenter (para futuras ampliaciones sin downtime), y (E) añadir CPU y memoria adicional a la vCSA.

---

Question: 39

An administrator successfully install VMware ESXi onto the first host of a new vSphere cluster but makes no additional configuration changes.
When attempting to log into the vSphere Host Client using the Fully Qualified Domain Name (FQDN) of the host, the administrator receives the following error message:
- "Server Not Found -We can't connect to the server esx101.corp.local"

The following information has been provided to complete the configuration:
- Host FQDN: esx101.corp.local
- Management VLAN ID: 10
- DHCP: NO
- Management IP Address: 172.16.10.101/24
- Management IP Gateway: 172.16.10.1
- Corporate DNS Servers: 172.16.10.5,172.16.10.6
- DNS Domain: corp.local

In addition, all host configurations must also meet the following requirements:
- The management network must use only IPv4 network protocols.
- The management network must be fault tolerant.

Which three high level tasks should the administrator complete, at a minimum, in order to successfully log into the vSphere Host Client using the FQDN for esx101 and complete the configuration?
(Choose three)

A.	Ensure a DNS A Record is created for the VMware ESXi host on the corporate DNS servers.
B.	Update the VMware ESXi Management Network DNS configuration to use the corporate DNS servers for names resolution.
C.	Update the VMware ESXi Management Network IPv4 configuration to use a static IPv4 address.
D.	Configure at least two network adapters for the VMware ESXi Management Network.
E.	Set the value of the VMware ESXi Management Network VLAN ID to 10.
F.	Disable IPv6 for the VMware ESXi Management Network.

Correct answer: A, C, E

Explanation: Para acceder al vSphere Host Client mediante FQDN y cumplir los requisitos de red se necesitan: (A) crear un DNS A Record para el host ESXi en los servidores DNS corporativos, (C) configurar una IP estática IPv4 en el Management Network (DHCP=NO), y (E) configurar el VLAN ID 10 en el Management Network. El requisito de fault tolerance se cumple con 2 NICs pero no es de los mínimos para el login inicial.

---

Question: 40

When configuring vCenter high Availability (HA), which two statements are true regarding the active, passive, and witness nodes?
(Choose two)

A.	Network latency must be less than 10 milliseconds.
B.	They must have a supported Wide Area Network (WAN).
C.	They must have a minimum of a 10 Gbps network adapter.
D.	They must have a minimum of a 1 Gbps network adapter.
E.	Network latency must be more than 10 milliseconds.

Correct answer: A, D

Explanation: Para los nodos Active, Passive y Witness de vCenter High Availability: (A) la latencia de red entre los nodos debe ser inferior a 10 milisegundos para garantizar la replicación del estado y la detección de fallos, y (D) deben disponer de un adaptador de red de mínimo 1 Gbps para el tráfico de replicación y heartbeat.

---

Question: 41

An administrator is deploying a new all flash vSAN cluster based on the vSAN Original Storage Architecture (OSA).

What is the minimum supported network throughput in Gb/s for each host?

A.	50
B.	10
C.	25
D.	1

Correct answer: B

Explanation: Para un clúster vSAN All-Flash usando la arquitectura Original Storage Architecture (OSA), el ancho de banda de red mínimo requerido por host es de 10 Gbps. Las arquitecturas All-Flash tienen mayor throughput de I/O que las híbridas, requiriendo mayor ancho de banda de red para la replicación entre hosts.

---

Question: 42

An administrator enables Secure Boot on an ESXi host. On booting the ESXi host, the following error message appears:
- Fatal error: 39 (Secure Boot Failed)

What is the cause of this issue?

A.	The kernel has been tampered with.
B.	The Trusted Platform Module chip has failed.
C.	The administrator attempted to boot with a bootloader that is unsigned or has been tampered with.
D.	A package (VIB or driver) has been tampered with.

Correct answer: A

Explanation: El error 'Fatal error: 39 (Secure Boot Failed)' durante el arranque de ESXi indica que el kernel del sistema operativo ha sido modificado o comprometido. Secure Boot verifica la firma criptográfica del kernel en el momento del arranque y falla si detecta manipulación del binario del kernel.

---

Question: 43

To keep virtual machines (VMs) up and running at all times in a vSphere cluster, an administrator would like VMs to be migrated automatically when the host hardware health status becomes degraded.

Which cluster feature can be used to meet this requirement?

A.	Predictive DRS.
B.	Proactive HA.
C.	vSphere HA Orchestrated Restart.
D.	vSphere Fault Tolerance.

Correct answer: B

Explanation: Proactive HA monitoriza la salud del hardware del host ESXi mediante sensores y providers de los fabricantes. Cuando detecta degradación en componentes hardware (PSU, ventiladores, temperatura), migra automáticamente las VMs a hosts saludables antes de que se produzca un fallo completo.

---

Question: 44

An administrator wants to allow a DevOps engineer the ability to delete Tanzu Kubernetes Grid (TKG) cluster objects in a vSphere Namespace.

Which role would provide the minimum required permissions to perform this operation?

A.	Administrator.
B.	Can View.
C.	Owner.
D.	Can Edit.

Correct answer: D

Explanation: El rol 'Can Edit' en un vSphere Namespace de Tanzu proporciona los permisos necesarios para crear, modificar y eliminar objetos TKG cluster, sin otorgar permisos administrativos completos. El rol 'Owner' también lo permitiría pero tiene más privilegios de los necesarios para el principio de mínimos privilegios.

---

Question: 45

A group of new virtual machines have been deployed using thin-provisioned disks due to the limited storage space available in an environment.
The storage team has expressed concern about extensive use of this type of provisioning.
An administrator is tasked with creating a custom alarm to notify the storage team when thin provisioning reaches a certain capacity threshold.

Where must the administrator define this alarm?

A.	Datastore.
B.	Datacenter.
C.	Datastore cluster.
D.	Virtual machine.

Correct answer: A

Explanation: Las alarmas relacionadas con thin provisioning y capacidad de datastores deben definirse en el objeto Datastore, ya que es el nivel donde se gestiona el espacio de almacenamiento. Las alarmas de umbral de thin provisioning se configuran en el datastore para monitorizar el uso real vs. el aprovisionado.

---

Question: 46

What are three options an administrator can configure after creating vSphere Namespace?
(Choose three)

A.	Backup schedule.
B.	Certificates.
C.	Storage policies.
D.	Update policies.
E.	Permissions.
F.	Resource and Object limits.

Correct answer: C, E, F

Explanation: Tras crear un vSphere Namespace en Tanzu, se pueden configurar: (C) Storage policies (para definir qué datastores y políticas usa el namespace), (E) Permissions (para controlar qué usuarios y grupos tienen acceso al namespace), y (F) Resource and Object limits (para limitar CPU, memoria y número de objetos del namespace).

---

Question: 47

A VMkernel port is labelled PRODO1 and uses the default TCP/IP stack.
Currently, this VMkernel port is configured for supporting live virtual machine (VM) migrations.

Which configuration change should the administrator make to isolate live VM migration traffic from other network traffic?

A.	Remove PRODO1 and create a new VMkernel port and set the TCP/IP stack to vSphere vMotion.
B.	Remove PRODO1 and create a new VMkernel port with the TCP/IP stack set to provisioning.
C.	Create a new VMkernel port and set the TCP/IP stack to provisioning.
D.	Modify PRODO1 by changing the TCP/IP stack to vSphere vMotion.

Correct answer: A

Explanation: Para aislar el tráfico de vMotion del resto del tráfico de red, es necesario usar un TCP/IP stack dedicado de vMotion. Como el VMkernel existente usa el stack por defecto, no se puede cambiar el stack de un VMkernel existente. Se debe eliminar PRODO1 y crear uno nuevo con el TCP/IP stack configurado como vSphere vMotion.

---

Question: 48

After adding a new vSphere ESXi host with identical hardware configuration to an existing vSphere cluster, which task would an administrator complete prior to checking the compliance with an existing host profile?

A.	Attach the host profile to the new host.
B.	Duplicate the host profile.
C.	Copy the host setting from the new host.
D.	Import the host profile.

Correct answer: A

Explanation: Antes de verificar el cumplimiento de un nuevo host con un host profile existente, el administrador debe primero adjuntar (attach) el host profile al nuevo host. Sin esta vinculación, vCenter no sabe qué profile usar como referencia para la comprobación de cumplimiento del host.

---

Question: 49

An administrator is tasked with deploying a new on-premises software-defined data center (SDDC) that will contain a total of eight VMware vCenter instances.
The following requirements must be met:
- All vCenter instances should be visible in a single vSphere Client session.
- All vCenter inventory should be searchable from a single vSphere Client session.
- Any administrator must be able to complete operations on any vCenter instance using a single set of credentials.

What should the administrator configure to meet these requirements?

A.	Two Enhanced Linked Mode groups consisting on four vCenter instances each in a Single Sign-On domain.
B.	A single Hybrid Linked Mode group consisting of four vCenter instances each in a Single Sign-On domain.
C.	A single Enhanced Linked Mode group consisting of eight vCenter instances in one Single Sign-On domain.
D.	A single Hybrid Linked Mode group consisting of eight vCenter instances in one Single Sign-On domain.

Correct answer: C

Explanation: Enhanced Linked Mode permite unir hasta 15 instancias de vCenter en un único dominio SSO para administración unificada. Con 8 vCenters en un grupo ELM dentro de un mismo SSO domain, todos los administradores pueden acceder a todos los inventarios con un único conjunto de credenciales SSO desde una sola sesión de vSphere Client.

---

Question: 50

An administrator has Windows virtual machines (VMs) and VMware Tools is installed in each VM.
The administrator performs a status check of VMware Tools using vSphere Lifecycle Manager.

What is the VMware Tools status for the Windows VMs if the version of VMware Tools has a known problem and must be immediately upgraded?

A.	Version Unsupported.
B.	Guest Managed.
C.	Unknown.
D.	Upgrade Available.

Correct answer: A

Explanation: El estado 'Version Unsupported' de VMware Tools indica que la versión instalada tiene problemas conocidos y debe actualizarse de inmediato. Esta es una clasificación más severa que 'Upgrade Available', que simplemente indica disponibilidad de versión más reciente sin urgencia crítica.

---

Question: 51

Which three features are only available when using vSphere Distributed Switches instead of vSphere Standard Switches?
(Choose three)

A.	802.10 tagging.
B.	Port mirroring.
C.	Netflow.
D.	Configuration backup and restore.
E.	IPv6 support.
F.	IPv4 support.

Correct answer: B, C, D

Explanation: Las características exclusivas de vSphere Distributed Switch (VDS) no disponibles en vSphere Standard Switch (VSS) incluyen: (B) Port mirroring (análisis de tráfico mediante duplicación de puertos), (C) NetFlow (exportación de estadísticas de flujo de red para análisis), y (D) Configuration backup and restore (copia de seguridad y restauración de la configuración completa del switch).

---

Question: 52

An administrator is configuring vSphere Lifecycle Manager to install patches to a vSphere cluster.
The cluster runs workload virtual machines (VMs) that are incompatible with vSphere vMotion, and therefore cannot be live migrated between hosts during the installation of the patches.

Which configuration in vSphere Lifecycle Manager will allow the administrator to reduce the downtime associated with the patching operation without migrating the VMs?

A.	Enable Distributed Power Management (DPM) and set the VM power state to the suspend to disk option.
B.	Enable Quick Boot and set the VM power stale to the suspend to disk option.
C.	Enable vSphere High Availability (HA) admission control and set the VM power stale to the suspend to memory option.
D.	Enable Quick Boot and set the VM power state to the suspend to memory option.

Correct answer: D

Explanation: Quick Boot permite reiniciar el hypervisor ESXi omitiendo el POST completo del hardware, reduciendo significativamente el tiempo de reinicio. Combinado con 'suspend to memory' para las VMs incompatibles con vMotion (que guarda el estado de memoria en disco y las reanuda tras el reinicio), se minimiza el downtime sin migrar las VMs.

---

Question: 53

An administrator creates a new corporate virtual machine (VM) template every month to include all of the latest patches.
The administrator needs to ensure that the new VM template is synchronized from the primary data center site (London) to two secondary data center sites (Tokyo and New York).
The administrator is aware that datastore space is limited within the secondary data center sites.
The administrator needs to ensure that the VM template is available in the secondary sites the fist time a new virtual machine is requested.

Which four steps should the administrator take to meet these requirements?
(Choose four)

A.	Create a new published content library at the primary site.
B.	Add the virtual machine template to the subscribed content library.
C.	Create a new published content library in each secondary site.
D.	Create a new subscribed content library in each secondary site.
E.	Configure the subscribed content library to download content when needed.
F.	Configure each subscribed content library to download content inmediately.
G.	Add the virtual machine template to the published content library.

Correct answer: A, D, E, G

Explanation: Para sincronizar templates desde London a Tokyo y New York con espacio limitado: (A) crear published library en el site primario, (D) crear subscribed library en cada site secundario, (E) configurar la subscribed library para descargar el contenido cuando sea necesario (on-demand, no inmediatamente para ahorrar espacio), y (G) añadir el template a la published library.

---

Question: 54

An administrator is tasked with migrating a single virtual machine (VM) from an existing VMware vCenter to a secure environment where corporate security policy requires that all VMs be encrypted.
The secure environment consists of a dedicated vCenter instance with a 4-node vSphere cluster and already contains a number of encrypted VMs.

Which two steps must the administrator take to ensure the migration is a success?
(Choose two)

A.	Ensure that the source and destination vCenter instances share the same Key Management Server (KMS).
B.	Ensure that Encrypted vMotion is turned off for the VM.
C.	Ensure that the VM is encrypted betore attempting the migration.
D.	Ensure that the VM is powered off before attempting the migration.
E.	Ensure that the source and destination vCenter Servers have a different Key Management Server (KMS).

Correct answer: A, C

Explanation: Para migrar con éxito una VM encriptada a un entorno con encriptación obligatoria: (A) tanto el vCenter origen como el destino deben compartir el mismo Key Management Server (KMS) para que las claves de encriptación sean accesibles en el destino, y (C) la VM debe estar encriptada antes del intento de migración para cumplir la política de seguridad del entorno destino.

---

Question: 55

An administrator is tasked with providing users access to objects within an existing VMware vCenter instance.
The vCenter inventory has a single datacenter with one management vSphere cluster and five workload vSphere clusters.
The following requirements must be met for assigning the users access:
- Users must only be able to view all of the inventory objects associated with the management vSphere cluster.
- Users must be able to edit all of the inventory objects associated with two workload vSphere clusters.

The administrator creates a custom role to provide the permissions needed to allow users to edit inventory objects.

Which series of steps should the administrator complete to assign the custom role and provide the required level of access to users?

A.	Apply Global permissions to assign the Read Only role to the root vCenter object. Apply vCenter permissions to assign the custom role to the workload vSphere clusters and enable propagation.
B.	Apply Global permissions to assign the Read Only role to the root vCenter object and enable propagation. Apply vCenter permissions to assign the custom role to the workload vSphere clusters and enable propagation.
C.	Apply Global permissions to assign the Read Only role to the root vCenter object. Apply vCenter permissions to assign the custom role to the workload vSphere clusters.
D.	Apply Global permissions to assign the Read Only role to the root vCenter object and enable propagation. Apply VCenter permissions to assign the custom role to the workload vSphere clusters.

Correct answer: B

Explanation: Para que los usuarios puedan ver el cluster de management pero editar los de workload: (B) aplicar Global permissions con Read Only y propagation al objeto raíz de vCenter (para ver todo el inventario), y luego aplicar permissions de vCenter con el rol custom en los 5 clusters de workload con propagation habilitado (para que los permisos se hereden en todos los objetos del cluster).

---

Question: 56

An administrator has a requirement to revert a running virtual machine to a previous snapshot after a failed attempt to upgrade an application.
When the administrator originally took the snapshot, the following choices in the Take Snapshot dialog were made:
- Snapshot the virtual machine's memory = false
- Quiesce guest file system = false

What will be the result of the administrator selecting the "Revert to Latest Snapshot" option to return the virtual machine to a previous snapshot?

A.	The virtual machine will be restored to the parent snapshot in a powered on state.
B.	The virtual machine will be restored to the parent snapshot in a powered off state.
C.	The virtual machine will be restored to the child snapshot in a powered off state.
D.	The virtual machine will be restored to the child snapshot in a powered on state.

Correct answer: B

Explanation: Cuando se tomó el snapshot con 'Snapshot VM memory = false', la VM no guardó el estado de memoria. Al revertir a ese snapshot, la VM se restaura al estado en que estaba cuando se tomó el snapshot (disco en ese estado) pero sin estado de memoria, resultando en que la VM arranca en estado powered off.

---

Question: 57

An administrator is planning to upgrade a VMware vCenter instance to version 8.
It is currently integrated with the following solutions:
- VMware Aria Automation 
- VMware Cloud Director 

Which tool can the administrator use to run interoperability reports before the upgrade process?

A.	vSphere Update Manager.
B.	VMware Aria Suite Lifecycle.
C.	vCenter Server Update Planner.
D.	vSphere Lifecycle Manager.

Correct answer: C

Explanation: vCenter Server Update Planner es la herramienta integrada en vCenter que genera informes de interoperabilidad automáticos antes de actualizar vCenter. Detecta incompatibilidades con soluciones integradas como Aria Automation y Cloud Director, permitiendo al administrador planificar la actualización correctamente.

---

Question: 58

An administrator decides to restore VMware vCenter from a file-based backup following a failed upgrade.

Which interface should the administrator use to complete the restore?

A.	Direct Console User Interface (DCUI).
B.	Center Management Interface (VAMI).
C.	vSphere Client.
D.	vCenter GUI Installer.

Correct answer: D

Explanation: Para restaurar vCenter desde un backup de archivo tras una actualización fallida, se debe usar el instalador gráfico de vCenter (vCenter GUI Installer). La restauración despliega una nueva instancia de vCSA y en la fase 2 permite seleccionar el backup (NFS, FTP, HTTP, FTPS) como fuente de restauración.

---

Question: 59

An administrator needs to provide encryption for workloads within an existing vSphere cluster.
The following requirements must be met:
- Workloads should be encrypted at rest.
- Encrypted workloads must automatically be encrypted during transit.
- Encryption should not require any specific hardware.

What should the administrator configure to meet these requirements?

A.	Encrypted vSphere vMotion.
B.	Unified Extensible Firmware Interface (UEFI) Secure Boot.
C.	Host Encryption.
D.	VM Encryption.

Correct answer: D

Explanation: VM Encryption (vSphere Virtual Machine Encryption) encripta los archivos de la VM en reposo y automáticamente encripta el tráfico vMotion (Encrypted vMotion) durante la migración. No requiere hardware especial y la encriptación se gestiona mediante políticas de almacenamiento SPBM con un key provider configurado.

---

Question: 60

After a number of outages within a production VMware software-defined data center, an administrator is tasked with identifying a solution to meet the following requirements:
- Reduce the risk of outages by proactively identifying issues with the environment and resolving them.
- Reduce the complexity of uploading log bundles when raísng support tickets.

Which solution should the administrator recommend to meet they requirements?

A.	VMware Aria Operations for Logs.
B.	VMware Skyline Advisor Pro.
C.	VMware Skyline Health.
D.	VMware Aria Operations.

Correct answer: B

Explanation: VMware Skyline Advisor Pro es el servicio que monitoriza proactivamente el entorno para identificar problemas antes de que ocurran, proporciona recomendaciones preventivas y simplifica la creación de bundles de soporte. Se diferencia de Skyline Health en que incluye recomendaciones proactivas y automatización del soporte.

---

Question: 61

An administrator is responsible for performing maintenance tasks on a vSphere cluster.
The cluster has the following configuration:
- Identically configured vSphere ESXi hosts (esx01, esx02, esx03 and esx04)

All workloads are deployed into a single VMFS datastore provided by the external storage array vSphere High Availability (HA) has not been enabled vSphere Distributed Resource Scheduler (DRS) has not been enabled.
Currently, a critical production application workload (VM1) is running on esx01.

Given this scenario, which two actions are required to ensure VMI continues to run when esx01 is placed into maintenance mode?
(Choose two)

A.	Fully automated DRS must be enabled on the cluster so that VMI will be automatically migrated to another host within the cluster when esx01 is placed into maintenance mode.
B.	VM1 must be manually shut down and cold migrated to another host within the cluster using vSphere vMotion before esx0! is placed into maintenance mode.
C.	vSphere HA must be enabled on the cluster so that VMI will be automatically migrated to another host within the cluster when esx01 is placed into maintenance mode.
D.	VM1 must be manually live migrated to another host within the cluster using vSphere vMotion before esx01 is placed into maintenance mode.
E.	VM1 must be manually migrated to another host within the cluster using VSphere Storage vMotion before esx01 is placed into maintenance mode.

Correct answer: A, D

Explanation: Sin DRS ni HA habilitados, el administrador debe actuar manualmente. Para que VM1 continúe ejecutándose mientras esx01 entra en mantenimiento: (A) habilitar DRS en modo Fully Automated para que migre automáticamente VMs al poner el host en mantenimiento, O bien (D) migrar manualmente VM1 a otro host usando vSphere vMotion antes de poner esx01 en mantenimiento.

---

Question: 62

An administrator needs better performance and near-zero CPU utilization from the ESXi hosts for networking functions and processing.
The administrator creates a new vSphere Distributed Switch and enables network offloads compatibility.

Which solution would help achieve this goal?

A.	vSphere Distributed Services Engine.
B.	Data Processing Units (DPUs).
C.	vSphere Network I/O Control.
D.	Universal Passthrough version 2.

Correct answer: A

Explanation: vSphere Distributed Services Engine (DSE) utiliza Data Processing Units (DPUs) para offload de funciones de networking a hardware dedicado, liberando ciclos de CPU de los hosts ESXi. Al crear el VDS con network offloads compatibility habilitado, las funciones de red se delegan al DPU, reduciendo la utilización de CPU del host a near-zero para operaciones de red.

---

Question: 63

An administrator needs to perform maintenance on a datastore that is running the vSphere Cluster Services (vCLS) virtual machines (VMs).

Which feature can the administrator use in this scenario to avoid the use of Storage vMotion on the vCLS VMs?

A.	vSphere Distributed Resource Scheduler (DRS).
B.	vSphere vMotion.
C.	vSphere Fault Tolerance.
D.	vCLS Retreat Mode.

Correct answer: D

Explanation: vCLS Retreat Mode es una característica que permite al administrador indicar a vCenter que retire las VMs de vCLS (vSphere Cluster Services) de datastores específicos, usando datastores alternativos designados. Esto evita la necesidad de usar Storage vMotion en estas VMs del sistema durante el mantenimiento del datastore.

---

Question: 64

What is the role of vSphere Distributed Services Engine?

A.	Provide a live shadow instance of a virtual machine (VM) that mirrors the primary VM to prevent data loss and downtime during outages.
B.	Implement Quality of Service (QoS) on network traffic within a vSphere Distributed Switch.
C.	Provide hardware accelerated data processing to boost infrastructure performance.
D.	Redistribute virtual machines across vSphere cluster hosts to comply with user-defined affinity and anti-affinity rules following host failures or during maintenance operations.

Correct answer: C

Explanation: vSphere Distributed Services Engine (DSE) proporciona aceleración hardware de procesamiento de datos mediante DPUs (Data Processing Units o SmartNICs). Estas unidades offloadan el procesamiento de red, almacenamiento y seguridad al hardware dedicado del DPU, mejorando el rendimiento de la infraestructura significativamente.

---

Question: 65

A vSphere cluster has the following vSphere Distributed Resource Scheduler (DRS) group configuration:
- Virtual machine (VM) group named DB
- Host groups named PROD11 and PROD55

The administrator wants to force the VMs in the DB group to run on the hosts in the PROD11 group.
However, if all the hosts in PROD11 go offline for maintenance, then the VMs in the DB group should run on hosts in PROD55.

Which VM/Host rule must the administrator create to ensure that these requirements are met?

A.	A preferential rule between the DB group and the PROD11 group
B.	A preferential rule between the DB group and the PROD55 group
C.	A required rule between the DB group and the PROD11 group
D.	A required rule between the DB group and the PROD55 group

Correct answer: A

Explanation: Una regla preferencial (Should run on hosts in group) entre el grupo DB y PROD1 fuerza a DRS a colocar preferiblemente las VMs del grupo DB en los hosts de PROD1, pero permite que se ejecuten en PROD55 si PROD1 no está disponible. Una regla requerida (Must run on) no permitiría ejecutar en PROD55 si PROD1 falla.

---

Question: 66

An administrator is asked to configure a security policy at the port group level of a standard switch.
The following requirements must be met:
- The security policy must apply to all virtual machines on portgroup-1.
- All traffic must be forwarded, regardless of the destination.

Which security policy must the administrator configure?

A.	Forged transmits set to reject.
B.	MAC address changes set to accept.
C.	Promiscuous mode set to reject.
D.	Promiscuous mode set to accept.

Correct answer: D

Explanation: El modo promiscuo (Promiscuous Mode) configurado en accept en el port group permite que todas las VMs conectadas al port group reciban todo el tráfico que pasa por el switch virtual, independientemente del destino. Esto cumple el requisito de reenviar todo el tráfico sin importar el destino, útil para herramientas de monitorización de red.

---

Question: 67

Following a merger with another company, an administrator is tasked with configuring an identity source for VMware vCenter so that all vSphere administrator can authenticate using their existing Active Directory accounts.
Each company has user accounts in their own Active Directory forests.
The following additional information has been provided:
- The corporate policy states that only Windows-based machine accounts are allowed in Active Directory.

Which action should the administrator take to configure vCenter Single Sign-On (SSO) to meet this requirement?

A.	Configure SSO to use Active Directory over LDAP as the identity source.
B.	Join the vCenter Server Appliance to the LDAP domain.
C.	Configure SSO to use Active Directory (Integrated Windows Authentication) as the identity source.

Correct answer: A

Explanation: Cuando cada empresa tiene usuarios en sus propios bosques de Active Directory y la política corporativa solo permite cuentas de máquina Windows en AD, la solución es configurar SSO con Active Directory over LDAP como identity source. Esta opción permite conectarse a múltiples dominios AD sin requerir que el vCenter Appliance se una al dominio (lo que crearía una cuenta de máquina).

---

Question: 68

An administrator notices a performance issue in VMware vCenter.
To try and understand more about the performance issue, the administrator needs to gather more information about the vCenter database to eliminate a potential disk space issue.

Which two tools can the administrator use?
(Choose two)

A.	vCenter Management Interface (VAMI).
B.	Perfmon.
C.	df.
D.	esxtop.
E.	vSphere Client.

Correct answer: A, C

Explanation: Para investigar problemas de espacio en la base de datos de vCenter: (A) vCenter Management Interface (VAMI) proporciona información sobre el uso de disco de la vCSA incluyendo la base de datos PostgreSQL, y (C) el comando 'df' ejecutado en la consola de la vCSA muestra el uso de espacio de todos los sistemas de archivos del appliance.

---

Question: 69

An administrator notices a Fibre Channel adapter in an ESXi host has been experiencing incon-sistent connectivity states.

Which trigger can be used to quickly identify the issue and alert the administrator so that the issue can be resolved?

A.	Host Connection Lost.
B.	Lost Network Path Redundancy.
C.	Lost Network Connectivity.
D.	Lost Storage Connectivity.

Correct answer: D

Explanation: Una alarma de 'Lost Storage Connectivity' en vCenter detecta cuando un host ESXi pierde conectividad con el almacenamiento, incluyendo adaptadores Fibre Channel con estados de conectividad inconsistentes. Esta es la alarma correcta para alertar sobre problemas de conectividad en el adaptador FC.

---

Question: 70

An administrator is tasked with looking into the disaster recovery (DR) options for a software-defined data center (SDDC).
The following requirements must be met:
- All virtual machines (VMs) must be protected to a secondary site.
- The source VMs must remain online until the failover.
- When failing over to the secondary site, application downtime is allowed.
- The DR failover must be managed from the vSphere Client.
- Costs must remain as low as possible.

How can the administrator accomplish this task?

A.	Configure VMware Cloud Disaster Recovery (VCDR) and combine it with array-based storage replication.
B.	Configure VMware a Site Recovery Manager and combine it with vSphere Replication.
C.	Configure a subscribed content library on the secondary site.
D.	Configure VMware Site Recovery Manager and combine it with array-based storage replication.

Correct answer: B

Explanation: VMware Site Recovery Manager combinado con vSphere Replication proporciona: protección de todas las VMs, las VMs origen permanecen online hasta el failover, permite downtime en el failover, gestión desde vSphere Client, y tiene el menor coste al usar replicación software. SRM gestiona el proceso de failover orquestado desde vSphere Client.

---

Question: 71

An administrator needs to update a VMware vCenter instance to a newer minor release version.
Due to restrictions within the environment, the vCenter instance does not have access to the Internet.
As a first step, the administrator downloads the required update on another machine.

What are the next steps the administrator must perform to complete the update?

A.	Place the update ISO file in a Virtual Machine File System (VMFS) datastore. Use the vSphere Client to select the update ISO file as the source for the update.
B.	Mount the ISO update file to the CD-ROM drive of the vCenter instance. Use the vCenter Manegement Interface to select the CD-ROM as the sources for the update.
C.	Place the ISO update file in a folder accessible to the vCenter instance over HTTPS. Use the vCenter Management Interface to select the update file as the source for the update.
D.	Place the ZIP update file in a folder accessible to the vCenter instance over HTTPS. Use the vSphere Client to select the update file as the source for the update.

Correct answer: B

Explanation: Para actualizar vCenter sin acceso a Internet: se debe montar el archivo ISO de actualización en el CD-ROM drive de la VM de vCenter (usando el vSphere Client para conectar la ISO del datastore), y luego desde vCenter Management Interface (VAMI) seleccionar CD-ROM como la fuente para la actualización.

---

Question: 72

An administrator is tasked with allowing a single user the ability to take snapshots on a virtual machine.
When looking in vCenter, the administrator can see that there are already users and groups assigned permissions on the virtual machine as follows:
- The group VM_Users has the Virtual Machine Power User role.
- The group VM_Viewers has the Read Only role.

The administrator confirms that the user requesting the additional access is currently one of five members of the VM_Viewers group.

Which two steps should the administrator take to grant this user the additional access required without impacting the user access of others? (Choose two.)

A.	Add the user to the VM_Users group and leave the permissions on the virtual machine object unchanged.
B.	Add a new permission on the virtual machine object selecting the user and the new custom role.
C.	Edit the Read Only role to add the Virtual Machine Snapshot Management privileges.
D.	Create a new custom role with the Virtual Machine Snapshot Management privileges.
E.	Add a new permission on the virtual machine object selecting the VM_Viewers group and the new custom role.

Correct answer: B, D

Explanation: Para conceder permiso de snapshots a un único usuario sin afectar a otros: (D) crear un rol custom con los privilegios de Virtual Machine Snapshot Management, y (B) añadir un nuevo permiso en el objeto de la VM seleccionando el usuario específico y el nuevo rol custom. Esto es más granular que modificar el rol Read Only existente que afectaría a todos los usuarios del grupo VM_Viewers.

---

Question: 73

An administrator is preparing to perform an update to vSphere clusters that are running vSAN.
The administrator wants to ensure that the following requirements are met as part of the update:
- All hosts in the cluster are updated with the same software.
- The firmware versions on the hosts are updated.
- The new software versions are checked for compliance against the vSAN Hardware Compatibility.

Which three steps should the administrator take to meet these requirements?
(Choose three)

A.	Configure vSphere Lifecycle Manager with an image for the cluster.
B.	Register the vendor hardware management system as a vCenter Server extension.
C.	Download the firmware updates from the VMware website.
D.	Download the firmware updates from the vendor website.
E.	Run a hardware compatibility check using vSphere Lifecycle Manager.
F.	Configure vSphere Lifecycle Manager with a baseline for the cluster.

Correct answer: A, B, E

Explanation: Para actualizar vSAN clusters con conformidad de hardware: (A) configurar vLCM con un image (no baseline) para el cluster, (B) registrar el sistema de gestión hardware del fabricante como extensión de vCenter (para el firmware add-on), y (E) ejecutar hardware compatibility check usando vLCM para verificar contra el VMware Compatibility Guide.

---

Question: 74

An administrator is asked to segregate virtual machine (VM) traffic by VLAN on a vSphere standard switch.

The following requirements must be met:
- VLAN ID on the switch port group must be 4095.
- VLAN tagging must be done at the VM level.

Which tagging mode is required?

A.	External Switch Tagging (EST).
B.	None.
C.	Virtual Guest Tagging (VGT).
D.	Virtual Switch Tagging (VST).

Correct answer: C

Explanation: Virtual Guest Tagging (VGT) requiere que el port group tenga VLAN ID 4095 (trunk nativo) y que el etiquetado VLAN se realice dentro de la VM, por ejemplo mediante un switch virtual invitado o driver de red que soporte dot1q. Esto permite a la VM manejar múltiples VLANs directamente.

---

Question: 75

An administrator wants to use tag-based placement rules on their virtual machine disks using VMware vCenter.

Which option would allow the administrator to achieve this?

A.	Storage Policy Based Management.
B.	Storage I/O Control.
C.	vSphere Storage APIs for Storage Awareness (VASA).
D.	vSphere Distributed Resource Scheduler (DRS).

Correct answer: A

Explanation: Storage Policy Based Management (SPBM) permite al administrador definir políticas de almacenamiento que incluyen reglas de tag-based placement, asociando etiquetas de almacenamiento a los discos de las VMs. vCenter asegura que los VMDKs se coloquen en datastores que tengan las etiquetas requeridas por la política.

---

Question: 76

A combination of which two components of the software-defined data center (SDDC) are responsible for the initial abstraction of CPU, memory, disk, and network resources and their sub-sequent management?
(Choose two)

A.	VMware Aria Operations.
B.	VMware Aria Suite Lifecycle.
C.	VMware vCenter.
D.	VMware ESXi.
E.	VMware vCenter Cloud Gateway.

Correct answer: C, D

Explanation: Los componentes del SDDC responsables de la abstracción inicial de CPU, memoria, disco y red son: (C) VMware vCenter, que proporciona la capa de gestión y orquestación de los recursos virtualizados, y (D) VMware ESXi, que es el hipervisor que realiza la abstracción directa del hardware físico en recursos virtuales.

---

Question: 77

What are two use cases for VMware vSphere+?
(Choose two)

A.	Enhance on-premises workloads by managing them through the VMware Cloud Console.
B.	Allow live migration between on-premises and VMware Cloud.
C.	Increase the performance of the native vCenter vMotion capability.
D.	Allow the creation of affinity and anti-affinity rules to be used during failover events.
E.	Simplify vCenter lifecycle management through cloud-enabled automation.

Correct answer: A, E

Explanation: VMware vSphere+ ofrece dos casos de uso principales: (A) mejora de workloads on-premises gestionándolos a través de VMware Cloud Console (gestión unificada cloud), y (E) simplificación del ciclo de vida de vCenter mediante automatización habilitada por la nube, incluyendo actualizaciones y configuración centralizada.

---

Question: 78

An administrator is completing the configuration of a new vSphere cluster and has enabled vSphere High Availability (HA) and vSphere Distributed Resource Scheduler (DRS).

After adding the ESXi hosts to the cluster, which networking information will the administrator be prompted to provide when using the Cluster Quickstart workflow?

A.	vMotion networking.
B.	Management networking.
C.	vSAN networking.
D.	Virtual machine networking.

Correct answer: A

Explanation: El workflow de Cluster Quickstart, tras añadir hosts ESXi al cluster con HA y DRS habilitados, solicita al administrador configurar la red de vMotion. Esta es la información de networking crítica que el asistente necesita para completar la configuración del cluster, junto con vSAN networking si corresponde.

---

Question: 79

An administrator plans to bring VMware vCenter offline in order to perform hardware mainte-nance on the host where the vCenter Server Appliance is running.

Which vSphere feature must be configured to ensure that vCenter users experience minimal downtime?

A.	vSphere Distributed Resource Scheduler.
B.	Hybrid Linked Mode.
C.	vCenter Server High Availability.
D.	Enhanced Linked Mode.

Correct answer: C

Explanation: vCenter Server High Availability (vCenter HA) protege la instancia de vCenter contra fallos del host hardware donde se ejecuta. Con vCenter HA configurado, si el host falla, el nodo pasivo de vCenter HA asume automáticamente el rol activo con mínimo downtime (típicamente menos de 5 minutos).

---

Question: 80

Which two tasks can be completed using vSphere LifeCycle Manager?
(Choose two)

A.	Manage the firmware lifecycle of ESXi hosts that are part of a managed cluster with a single image.
B.	Check that the ESXi hosts are compliant with the recommended baseline and update the hosts.
C.	Upgrade VMware vCenter from version 7 to 8.
D.	Check the hardware compatibility of the hosts in a cluster against the VMware Compatibility Guide (VCG) using baselines.
E.	Manage the firmware lifecycle of ESXi hosts are part of a managed cluster using baselines.

Correct answer: A, B

Explanation: vSphere Lifecycle Manager puede: (A) gestionar el ciclo de vida del firmware de hosts ESXi en clusters con single image (usando la integración con vendors para firmware add-ons), y (B) verificar el cumplimiento de hosts con baselines recomendadas y actualizar los hosts. No puede actualizar vCenter directamente ni gestionar firmware con baselines.

---

Question: 81

An administrator is tasked with implementing a backup solution capable of backing up the Supervisor cluster, vSphere Pods, and persistent volumes.

Which two solutions must be used to meet this requirement?
(Choose two)

A.	VMware vCenter.
B.	Standalone Velero and Restic.
C.	NSX-T Manager.
D.	vSphere Host Client.
E.	Velero Plugin for vSphere.

Correct answer: B, E

Explanation: Para proteger el Supervisor cluster, vSphere Pods y persistent volumes en Tanzu: (B) Standalone Velero con Restic proporciona backup de namespace y persistent volumes Kubernetes, y (E) Velero Plugin for vSphere proporciona backup y restore de persistent volumes específicamente optimizado para el entorno vSphere con integración nativa.

---

Question: 82

An administrator receives reports from the application team of poor performance of a virtual machine (VM).
The administrator reviews the machine and discovers that it has 20 snapshots that are over 12 months old.

What could the administrator do to improve the VM's performance?

A.	Inflate the base disk to make space for future snapshots.
B.	Revert to the latest snapshot.
C.	Consolidate all of the snapshots into the base VM.
D.	Identify and delete the largest delta vmdk file.

Correct answer: C

Explanation: Tener 20 snapshots acumulados de más de 12 meses provoca degradación del rendimiento porque ESXi debe atravesar la cadena de snapshots para cada operación de I/O. La solución es consolidar todos los snapshots en el disco base de la VM usando 'Consolidate', eliminando los archivos delta y restaurando el rendimiento de I/O.

---

Question: 83

A vSphere cluster hosts a three-tier application.
The cluster has 50% resources available.
If a host in the cluster fails, the database server must be online before the application server, and the application server must be online before the Web server.

Which feature can be used to meet these requirements?

A.	Predictive DRS.
B.	vSphere HA Orchestrated Restart.
C.	vSphere HA Restart Priority.
D.	Proactive HA.

Correct answer: B

Explanation: vSphere HA Orchestrated Restart permite definir dependencias de arranque entre VMs (una VM debe estar online antes de que otra arranque). Con el 50% de recursos disponibles, asegura que en caso de fallo de host, las VMs críticas (DB primero, luego app, luego web) se reinicien en el orden correcto respetando las dependencias.

---

Question: 84

What is the minimum network throughput in Gb/s for vSAN using the Express Storage Architec-ture (ESA)?

A.	50.
B.	25.
C.	1.
D.	10.

Correct answer: B

Explanation: vSAN Express Storage Architecture (ESA) es la arquitectura de nueva generación diseñada para dispositivos NVMe de alto rendimiento. Requiere un ancho de banda de red mínimo de 25 Gbps por host para gestionar el mayor throughput de I/O que proporciona ESA en comparación con la arquitectura OSA.

---

Question: 85

Which step is completed during Stage 1 of the vCenter Server Appliance deployment?

A.	Join a vCenter Single Sign-On domain.
B.	Create a new vCenter Single Sign-On domain.
C.	Select the deployment size.
D.	Configure SSH access.

Correct answer: C

Explanation: Durante el Stage 1 del despliegue del vCenter Server Appliance, el administrador selecciona el tamaño de despliegue (Tiny, Small, Medium, Large, X-Large) basándose en el número de hosts y VMs que gestionará el vCenter. El Stage 1 es el despliegue físico del appliance en el host ESXi destino.

---

Question: 86

An administrator is tasked with adding two additional hosts into an existing production vSphere cluster to support the need for additional capacity.
The vSphere cluster currently has four identically configured ESXi hosts (esx01, esx02, esx03 and esx04) that utilize Intel Skylake-based CPUs.
The two new hosts (esx05 and esx06) are configured identically in terms of memory and storage to the existing hosts, but utilize Intel Ice Lake-based CPUs.

The administrator must ensure that:

- Any virtual machine migrates to any of the six ESXi hosts running in the cluster.
- There's no virtual machine downtime during the process of adding the new hosts.

Which step should the administrator take to meet these requirements?

A.	Create a new vSphere cluster with Enhanced vMotion Compatibility (EVC) enabled and move all hosts into the new cluster.
B.	Create a new vSphere cluster and move only three hosts into the new cluster.
C.	Configure Enhanced vMotion Compatibility (EVC) mode on the existing cluster and add the two new hosts into the cluster.
D.	Create a new vSphere cluster with vSphere High Availability (HA) enabled and move all hosts into the new cluster.

Correct answer: C

Explanation: Para añadir hosts con CPUs Intel Ice Lake a un cluster existente con Intel Skylake manteniendo compatibilidad de vMotion: se debe configurar EVC (Enhanced vMotion Compatibility) mode en el cluster existente al nivel de CPU más bajo (Skylake) y luego añadir los nuevos hosts. Las VMs en ejecución no necesitan downtime con EVC configurado.

---

Question: 87

An administrator is investigating user logon failures for a VMware vCenter instance.

Where can the administrator find log files containing information related to user login activities?

A.	On the vCenter Management Interface.
B.	On the ESXi host using the Direct Console User Interface.
C.	On the vCenter Server Appliance.
D.	In the vSphere Client when viewing the vCenter virtual machine.

Correct answer: C

Explanation: Los archivos de log relacionados con actividades de login de usuarios en vCenter se encuentran en el vCenter Server Appliance, accesibles vía SSH o desde la consola del appliance. Los logs relevantes incluyen /var/log/vmware/sso/vmware-sts-idmd.log y /var/log/vmware/sso/catalina.out para actividades de autenticación.

---

Question: 88

What are two uses cases for VMware Tools?
(Choose two)

A.	Time synchronization with an NTP server.
B.	Direct deployment of the Aria Automation Config minion.
C.	Share folders between ESXi hosts and guest OS file systems.
D.	Ability to shut down a virtual machine remotely.
E.	Support for unsupported network device drivers.

Correct answer: D, E

Explanation: VMware Tools proporciona: (D) capacidad de apagar/reiniciar remotamente una VM desde vSphere Client (acciones de guest OS), y (E) soporte para drivers de dispositivos de red no soportados nativamente (vmxnet3, pvscsi). La sincronización de tiempo con NTP la hace directamente el guest OS, no exclusivamente VMware Tools.

---

Question: 89

An administrator has configured Storage I/O Control (SIOC) on a Virtual Machine File System (VMFS) datastore.
- The datastore supports 30,000 IOPS.
- Storage I/O Control has been set to manual.
- Storage I/O Control is triggered when latency hits 30 ms.
- The datastore contains 3 virtual machines (VMs).
	1. A gold tier VM.
	2. A silver tier VM.
	3. A bronze tier VM.

Assuming the datastore latency does not exceed 29ms, what is the maximum number of IOPS the bronze tier VM is entitled to?

A.	30,000.
B.	20,000.
C.	10,000.
D.	5,000.

Correct answer: A

Explanation: Cuando la latencia del datastore no supera el umbral configurado de SIOC (29ms < 30ms), Storage I/O Control no está activo y no aplica limitaciones de IOPS. En este estado, todas las VMs tienen acceso irrestricto al total de IOPS disponibles (30,000 IOPS), sin importar sus shares configurados.

---

Question: 90

An administrator needs to configure a content library solution based on the following information:

- A new corporate virtual machine (VM) template is created every month to include all of the latest patches.
- The new VM template should be downloaded from the primary datacenter site (London) to two secondary datacenter sites (Tokyo and New York) as soon as possible.
- There's limited disk space available at one of the secondary datacenter sites (Tokyo) due to an ongoing datacenter consolidation project.

Which four steps should the administrator take to configure the content library solution before adding a VM template?
(Choose four)

A.	Create a new published content library in each secondary site.
B.	Configure the New York subscribed content library to download content immediately.
C.	Configure the Tokyo subscribed content library to download content immediately.
D.	Configure the Tokyo subscribed content library to download content when needed.
E.	Create a new published content library at the primary site.
F.	Configure the New York subscribed content library to download content when needed.
G.	Create a new subscribed content library in each secondary site.

Correct answer: B, D, E, G

Explanation: Para gestionar templates con Londres como primario y Tokyo (espacio limitado) y New York: (B) configurar New York para descargar contenido inmediatamente (tiene espacio), (D) configurar Tokyo para descargar solo cuando sea necesario (espacio limitado), (E) crear la published library en el site primario de Londres, y (G) crear subscribed libraries en cada site secundario.

---

Question: 91

An administrator is required to configure several Microsoft Windows virtual machines (VMs) to support Secure Boot for a critical secure application.

The following information is provided:
- The corporate security policy states that all forms of data encryption must utilize a key provider.
- The firmware of each VM is currently set to use Unified Extensible Firmware Interface (UEFI).
- Due to the nature of the application running within the VMs, the guest operating system for each VM is currently a minimum of Windows Server 2008 and Windows 7.

Which security feature should the administrator implement to meet these requirements?

A.	vSphere Virtual Machine Encryption.
B.	vSphere Visualization-Based Security.
C.	Virtual Intel Software Guard Extensions (vSGX).
D.	Virtual Trusted Platform Module (vTPM).

Correct answer: D

Explanation: Virtual TPM (vTPM) cumple todos los requisitos: requiere UEFI (ya configurado), soporta Windows Server 2008/Windows 7 y versiones superiores, implementa Secure Boot para VMs Windows, y utiliza un key provider para la encriptación de las claves del TPM virtual según la política de seguridad corporativa.

---

Question: 92

An administrator is preparing for a deployment of a new vCenter Server Appliance. The following information has been provided to complete the deployment:
- ESXi Host name (FQDN): esx01.corp.local
- ESXi IP Address: 172.20.10.200
- vCenter Server Name (FQDN): vcsa01.corp.local
- vCenter Server IP Address: 172.20.10.100
- NTP Server: 172.20.10.20
- DNS Server: 172.20.10.1
- Deployment Size: Tiny
- Storage Size: Default

Which two actions must the administrator complete before starting the installation of the vCenter Server Appliance?
(Choose two)

A.	Create a DNS CNAME record for the vCenter Server (vcsa01.corp.local).
B.	Create a DNS CNAME record for the ESXi Host server (esx01.corp.local).
C.	Create a reverse DNS A record for the vCenter Server (vcsa01).
D.	Create a reverse DNS A record for the ESXu Host Server (esx01).
E.	Create a forward DNS A record for the vCenter Server (vcsa01).

Correct answer: C, E

Explanation: Antes de instalar el vCenter Server Appliance se deben crear registros DNS correctos: (C) un registro DNS A inverso (reverse DNS record PTR) para el vCenter Server, ya que la instalación requiere resolución DNS inversa para validar la identidad, y (E) un registro DNS A directo (forward) para el vCenter Server (vcsa01.corp.local → 172.20.10.100).

---

Question: 93

An administrator manages VM templates and ISO images for a remote office.
Their main requirements are to store these templates in a single repository and manage different versions of the templates.

What solution should the administrator deploy to meet these requirements?

A.	A vSAN Datastore.
B.	A shared VMFS datastore.
C.	A local content library.
D.	A subscribed content library.

Correct answer: C

Explanation: Un local content library proporciona un repositorio centralizado único para almacenar templates de VM e imágenes ISO en una sola ubicación, con soporte nativo para gestión de versiones (check-in/check-out) de los templates. Es la solución ideal para una oficina remota que necesita control de versiones sin necesidad de replicación.

---

Question: 94

An administrator needs to create affinity rules for the following vSphere cluster setup:

- The cluster contains two virtual machines (VMs) named appO1 and app02.
- The cluster contains six hosts named esx11 through esx16.
- The app01 and app02 VMs run software that is licensed to run only on esx11, esx12, or esx13.
- Sphere Distributed Resource Scheduler (DRS) is configured.

Which set of steps must the administrator perform to ensure that the licensing requirements are met for app01 and app02?

A.	1. Add all the hosts to a host group.
	2. Create a VM-VM anti-affinity rule for app01 and app02.
B.	1. Add the esx11-esx13 hosts to a host group.
	2. Create a VM-VM affinity rule for app01 and app02.
C.	1. Add the VMs to a VM group and the esx11-esx13 hosts to a host group.
	2. Create a VM-Host required rule between the VM group and the host group.
D.	1. Add the VMs to a VM group and the esx11-esx13 hosts to a host group.
	2. Create a VM-Host preferential rule between the VM group and the host group.

Correct answer: C

Explanation: Para cumplir requisitos de licenciamiento donde app01 y app02 solo pueden ejecutarse en esx11-esx13: (C) crear un VM group con app01 y app02, crear un host group con los hosts esx11-esx13, y crear una regla VM-Host requerida (Must run on) entre ambos grupos. Una regla requerida garantiza que DRS nunca coloque estas VMs en hosts fuera del grupo.

---

Question: 95

The vCenter inventory contains a virtual machine (VM) template called Linux-01.
The administrator wants to install a software patch into Linux-01 while allowing users to continue to access Linux-01 to deploy VMs.

Which set of steps should the administrator take to accomplish this task?

A.	1. Verify that Linux-01 is in a content library.
	2. Clone Linux-01.
	3. Convert the clone to a VM.
	4. Install the software patch.
B.	1. Convert Linux-01 to a VM
	2. Install the software patch.
	3. Convert the VM back to a VM template.
	4. Add Linux-01 to the content library.
C.	1. Verify that Linux-01 is in a content library.
	2. Check out Linux-01.
	3. Install the software patch.
	4. Check in Linux-01.
D.	1. Clone Linux-01.
	2. Convert the clone to a VM.
	3. Install the software patch.
	4. Convert the VM back to a template.

Correct answer: D

Explanation: Para instalar un parche en el template Linux-01 mientras los usuarios pueden seguir desplegando VMs desde él: (D) clonar Linux-01 como nueva VM, convertir el clon a VM, instalar el parche en la VM clon, y convertir la VM clon de vuelta a template. El template original permanece disponible durante todo el proceso.

---

Question: 96

An administrator remotely deploys VMware ESXi using an out of band management connection and now needs to complete the configuration of the management network so that the host is accessible through the vSphere Host Client.

The following information has been provided to complete the configuration:
- Host FQDN: esxi01.corp.local
- Management VLAN ID: 10
- DHCP: NO
- Management IP Address: 172.16.10.101/24
- Management IP Gateway: 172.16.10.1
- Corporate DNS Servers: 172.16.10.5,172.16.10.6
- DNS Domain: corp.local

In addition, all host configurations must also meet the following requirements:

- The management network must use only IPv4 network protocols.
- The management network must be fault tolerant.

Which four high Level tasks should the administrator complete in the Direct Console User Interface (DCUI) in order to meet the requirements and successfully log onto the vSphere Host Client?
(Choose four)

A.	Set the value of the VMware ESXi Management Network VLAN ID to 10.
B.	Configure at least two network adapters for the VMware ESXi Management Network.
C.	Update the VMware ESXi Management Network IPv4 configuration to use a static IPv4 address.
D.	Create a DNS A Record for the VMware ESXi host on the corporate DNS servers.
E.	Disable IPv6 for the VMware ESXi Management Network.
F.	Restore the original Management vSphere Standard Switch.
G.	Update the VMware ESXi Management Network DNS configuration to use the corporate DNS servers for names resolution.

Correct answer: A, B, C, E

Explanation: Desde el DCUI para configurar acceso completo al vSphere Host Client cumpliendo los requisitos: (A) configurar VLAN ID 10 en el management network, (B) configurar al menos 2 adaptadores de red para fault tolerance, (C) configurar IP estática IPv4 (DHCP=No), y (E) deshabilitar IPv6 (solo protocolo IPv4 requerido). La creación de DNS A Record se hace en los servidores DNS, no en DCUI.

---

Question: 97

Given the configuration shown in the exhibit, what should administrator do if the latest VM template contains changes that are no longer needed?

A.	Delete App-LibTemplate (2).
B.	Revert to App-LibTemplate (2).
C.	Delete App-LibTemplate (3).
D.	Check out App-LibTemplate (3).

Correct answer: B

Explanation: Si el template más reciente (versión 3) contiene cambios no deseados, se debe revertir a la versión anterior (App-LibTemplate versión 2). La operación 'Revert' en content library templates restaura el template a la versión anterior seleccionada, eliminando los cambios de la versión actual.

---

Question: 98

An administrator configures a distributed switch and adds the first VMware ESXi server to it.

The administrator also performs the following activities:
- The administrator assigns two uplinks to the distributed switch.
- The administrator enabled uplink teaming.

When attempting to perform a health check of the teaming policy, the health status of the Teaming and Failover reports as "Unknown", as seen in the exhibit.

What can the administrator changes in the distributed switch for the health status to report correctly?

A.	Add a minimum of three hosts with two uplinks each.
B.	Add a minimum of two hosts with two uplinks each.
C.	Add a minimum of three hosts with four uplinks each.
D.	Add a minimum of two hosts with one uplinks each.

Correct answer: B

Explanation: El health check de Teaming and Failover en un VDS muestra 'Unknown' cuando no hay suficientes hosts conectados para realizar la verificación. Se necesitan al menos 2 hosts con 2 uplinks cada uno (configuración mínima para verificar el balanceo y failover de teaming), ya que la comprobación requiere comparar configuraciones entre múltiples hosts.

---

Question: 99

After removing an ESXi host from a cluster for maintenace, a number of virtual machines have encountered the warning seen in the exhibit.
After readding the ESXi, the issue is resolved.

Which step should the administrator take to move the triggered alarm to its normal state?

A.	Ignore.
B.	Acknowledge.
C.	Disable.
D.	Reset to Green.

Correct answer: D

Explanation: Cuando una alarma se ha activado y el problema ya se ha resuelto (el host fue reañadido), la acción correcta es 'Reset to Green' para mover la alarma de vuelta a su estado normal. 'Acknowledge' solo silencia temporalmente la alarma sin resolver el estado. 'Reset to Green' confirma que el problema se ha solucionado.

---

Question: 100

An administrator set up the following configuration:

- The distributed switch has four ESXi hosts, and each host has two 10 Gbps, NICs.
- In the Network I/O Control configuration, the amount of bandwidth reserved for virtual machine (VM) traffic if 4 Gbps.

The administrator wants to guarantee that VMs in the Retail distributed port group can access 50 percent of the avalable reserved bandwidtch for YM traffic.

Given this scenario, what should the size (in Gbps) of the Retail network resource pool be?

A.	40.
B.	32.
C.	8.
D.	16.

Correct answer: D

Explanation: Con 4 hosts de 2×10 Gbps = 80 Gbps total, con 4 Gbps reservados para VM traffic, el 50% del bandwidth reservado para VM traffic = 4 Gbps × 50% = 2 Gbps. Sin embargo la respuesta correcta es D (16 Gbps) calculado como 50% del bandwidth total disponible por host (2 NICs × 10 Gbps = 20 Gbps, y con 4 hosts hay disponibles 80 Gbps, 50% de los 32 Gbps de reserva).

---

Question: 101

An environment has the following configuration:

1.	Resource Pool "RP-MOM" has a reservation of 6GHz and one running virtual machine (VM) "VM-M1" with 1 GHz reserved.
2.	Resource Pool "RP-KID" has a reservation of 2GHz, and expandable reservations is activated.

The administrator creates two VMS, "VM-K1" and "VM-K2" in the “RP-KID” resource pool with 2GHz reserved for each, and turns on “VM-M1".

Given this scenario, which statement is true?

A.	The administrator must deactivate expendable reservations to turn on VM-K2.
B.	The administrator can create a third VM ("VM-K3") at RP-KID and reserve 6GHz.
C.	VM-K2 can be powered on because it can get the resources needed from RP-MOM.
D.	VM-K2 cannot be powered on because there are not enough resources in RP-KID.

Correct answer: C

Explanation: Con Expandable Reservations activado en RP-KID, cuando VM-K2 necesita 2GHz adicionales y RP-KID ya tiene toda su reserva de 2GHz usada por VM-K1, puede expandirse tomando recursos del resource pool padre (RP-MOM tiene 6GHz reservados, solo usa 1GHz para VM-M1). VM-K2 puede encenderse tomando 2GHz prestados del parent pool.

---

Question: 102

An administrator is tasked with adding new capacity to an existing software-defined data center (SDDC).
- The SDDC currently hosts two vSphere clusters (Cluster and Cluster) with different CPU compatibilities.
- Sphere vMotion and vSphere Distributed Resource Scheduler (DRS) are currently in use in the SDDC.
- The new capacity will be implemented by provisioning four ESXi hosts running a new generation of Intel Skylake CPUs.
- All workload virtual machines (VMs) must support live migration to any cluster in the SDDC.

The administrator noticed the running critical "EVC" virtual machine (VM) shown in the exibit is not migrating using vSphere vMotion to the original Clusters A or B.

Which three steps must the administrator take to support this functionality?
(Choose three)

A.	Disable the Enhanced vMotion Compatiblity (EVC) on the VM.
B.	Reboot the VM.
C.	Configure the Enhanced vMotion Compatiblity (EVC) on the VM to Intel Skylake.
D.	Power on the VM.
E.	Configure the Enhanced vMotion Compatiblity (EVC) on vSphere Cluster A and B to support Intel Skylake.
F.	Power off the VM.

Correct answer: A, D, E

Explanation: Para que la VM 'evc1' que tiene EVC configurado pueda migrarse a los clusters A y B con procesadores Skylake: (A) deshabilitar el EVC configurado en la VM (que podría tener un modo incompatible), (E) configurar EVC en los clusters A y B al nivel Intel Skylake para aceptar VMs con ese baseline, y (D) encender la VM (el modo EVC de la VM se recalibra al inicio).

---

Question: 103

An administrator has a requirement to revert a running virtual machine to a previous snapshot after a failed attempt to upgrade an application. When the administrator originally took the snapshot, the following choices in the Take Snapshot dialog were made:

- Snapshot the virtual machine's memory = false
- Quiesce guest file system = false

What will be the result of the administrator selecting the "Revert to Latest Snapshot" option to return the virtual machine to a previous snapshot?
(Choose two)

A.	The virtual machine will be restored to the parent snapshot.
B.	The virtual machine will be restored in a powered off state.
C.	The virtual machine will be restored to the child snapshot.
D.	The virtual machine will be restored in a powered on state.
E.	The virtual machine will be restored in a suspended state.

Correct answer: A, B

Explanation: Con 'Snapshot VM memory = false', el snapshot no captura el estado de memoria RAM. Al revertir a ese snapshot: (A) la VM se restaura al snapshot padre (el punto en el tiempo del snapshot), y (B) la VM se restaura en estado powered off porque no hay estado de memoria guardado. La VM no puede reanudarse en estado running sin memoria guardada.

---

Question: 104

An administrator is tasked with configuring certificates for a VMware software-defined data center (SDDC) based on the following requirements:

- The solution should minimize the ongoing management overhead of replacing certificates.
- No intermediate certifcate authorities are allowed in the certifcate chain.
- All external traffic should be secured using certificated signed by an Enterprise Certificate Authority (CA).

Which two actions should the administrator take to ensure the solution meets corporate policy?
(Choose two)

A.	Replace the solution user certificates with custom certificates generated from the Enterpise CA.
B.	Replace the machine SSL certificates with custom certificates generated from the Enterpise CA.
C.	Replace the machine SSL certificates with self-signed certificates generated from the VMware Certificate Authority (VMCA).
D.	Replace the VMware Certificate Authority (VMCA) certificate with a custom certificate gen-erated from the Enterprise CA.
E.	Replace the solution user certificates with self-signed certificates generated from the VMware Certificate Authority (VMCA).

Correct answer: A, B

Explanation: Para que solo el tráfico externo use certificados de la Enterprise CA sin CA intermedias en la cadena: (A) reemplazar los solution user certificates con certificados custom de la Enterprise CA (para servicios internos de vCenter), y (B) reemplazar los machine SSL certificates con certificados custom de la Enterprise CA (para tráfico externo HTTPS hacia vCenter).

---

Question: 105

An administrator is planning to upgrade a VMware vCenter instance to version 8.
It is currently integrated with the following solutions:

- VMware Aria Operations for Logs.
- VMware Aria Operations.

Which tool can the administrator use to automatically detect interoperability between the solutions and eliminate any unwanted or unexpected results during the upgrade process?

A.	vSphere Update Manager.
B.	vSphere Lifecycle Manager.
C.	VMware Aria Suite Lifecycle.
D.	vCenter Server Update Planner.

Correct answer: D

Explanation: vCenter Server Update Planner es la herramienta que automáticamente detecta incompatibilidades entre vCenter y las soluciones integradas antes de una actualización. Analiza las versiones de Aria Operations for Logs y Aria Operations frente a la versión objetivo de vCenter y genera informes de interoperabilidad.

---

Question: 106

An administrator has a requirement to revert a running virtual machine to a previous snapshot after a failed attempt to upgrade an application.
When the administrator originally took the snapshot, the following choices in the Take Snapshot dialog were made:

- Snapshot the virtual machines memory = true.
- Quiesce guest file system = false.

Which two statements describe the result of the administrator selecting the "Revert to Latest Snapshot" option to return the virtual machine to a previous snapshot?
(Choose two)

A.	The virtual machine will be restored in a suspended state.
B.	The virtual machine will be restored in a powered off state.
C.	The virtual machine will be restored in a powered on state.
D.	The virtual machine will be restored to the parent snapshot.
E.	The virtual machine will be restored to the child snapshot.

Correct answer: C, D

Explanation: Con 'Snapshot VM memory = true', el snapshot captura el estado completo de la RAM de la VM. Al revertir a ese snapshot: (C) la VM se restaura en estado powered on (porque la memoria fue capturada y se puede restaurar el estado de ejecución), y (D) la VM se restaura al snapshot padre (el punto en el tiempo donde se tomó el snapshot con memoria).

---

Question: 107

Given the configuration shown in the exhibit, what must the administrator do to delete only the latest version of the template?

A.	In the SA-Templates folder, rename APP-LibTemplate (2) to APP-LibTemplate(4).
B.	Check out APP-LibTemplate (3) and delete the template from the SA-Templates folders.
C.	Delete APP-LibTemplate (3) from the SA-Templates folders.
D.	Revert to APP-LibTemplate (2) and delete APP-LibTemplate (3).

Correct answer: D

Explanation: Para eliminar solo la versión más reciente del template (versión 3) sin perder la versión anterior: se debe primero revertir al template de versión 2 (App-LibTemplate 2) para que sea la versión activa, y luego eliminar la versión 3 (App-LibTemplate 3). No se puede eliminar la versión activa directamente si hay versiones más antiguas.

---

Question: 108

A VMkernel port is labelled PROD01 and uses the default TCP/IP stack.

Which configuration change should the administrator make to isolate long-distance vSphere vMotion migration traffic from other Sphere vMotion traffic?

A.	Create a new VMkernel port and set the TCP/IP stack to vMotion.
B.	Remove PROD01 and create a new VMkernel port with the TCP/IP stack set to vMotion.
C.	Modify PROD01 by changing the TCP/IP stack to provisioning.
D.	Remove PROD01 and create a new VMkernel port with the TCP/IP stack set to provisioning.

Correct answer: A

Explanation: Para aislar el tráfico de vSphere vMotion de larga distancia del resto del tráfico vMotion se utiliza el TCP/IP stack de Long Distance vMotion. Se debe crear un nuevo VMkernel port con este stack dedicado, sin eliminar PRODO1 que gestiona el vMotion estándar. El stack de Long Distance vMotion está optimizado para mayor latencia de WAN.

---

Question: 109

An administrator is configuring a vSphere cluster to use a vSphere Lifecycle Manager image.
The vSphere Lifecycle Manager depot has been configured with all of the software components needed for the image.
The administrator plans to reuse an existing image that is configured on a cluster in another VMware vCenter instance.

Which series of steps should the administrator take to complete this task?

A.	1. Export the existing image to an ISO file format to their local machine.
	2. Attach the ISO file to the CD-ROM drive of the ESXi host.
	3. Import the image from the CD-ROM drive of the ESXi host into the vSphere Lifecycle Manager Import Image dialog to create a new image.
B.	1. Export the existing image to a ZIP file format to a web server machine.
	2. Import the ZIP image file into the vSphere Lifecycle Manager depot to create a new image.
C.	1. Export the existing image to a JSON file format to their local machine.
	2. Import the JSON image file into the vSphere Lifecycle Manager Import Image dialog to create a new image.
D.	1. Export the existing image to an ISO file format to a web server.
	2. Upload the ISO file to a datastore accessible to the vSphere Cluster.
	3. Import the image from the uploaded ISO file into the vSphere Lifecycle Manager Import Image dialog to create a new image.

Correct answer: C

Explanation: Para reutilizar un image existente de vLCM desde otro vCenter: (C) exportar el image en formato JSON desde el cluster origen, e importar el archivo JSON mediante el diálogo Import Image de vSphere Lifecycle Manager en el vCenter destino. El formato JSON preserva todos los componentes del image incluyendo versiones exactas y configuración.

---

Question: 110

An administrator is responsible for the management of a VMware vCenter instance that is currently experiencing performance issues.
The administrator quickly identifies that the CPU utilization of vCenter is consistently over 80%.
Upon further analysis, it seems that the vpxd process is contributing significantly to the performance issue.

A combination of which four steps should the administrator take to resolve the performance issues and ensure that a similar issue can be rectified without requiring downtime to vCenter moving forward?
(Choose four)

A.	Add additional memory resources to the vCenter Server Appliance.
B.	Power on the vCenter Server Appliance using the vSphere Host Client.
C.	Enable CPU Hot Add on the vCenter virtual machine.
D.	Enable CPU and Memory Hot Add on the vCenter virtual machine.
E.	Gracefully shut down vCenter using the vSphere Client.
F.	Enable Memory Hot Add on the vCenter virtual machine.
G.	Add additional CPU resources to the vCenter Server Appliance.

Correct answer: B, C, E, G

Explanation: Para resolver el problema de alto uso de CPU por el proceso vpxd y garantizar futuros cambios sin downtime: (E) apagar gracefully vCenter desde vSphere Client, (G) añadir CPU adicional al appliance para resolver el problema inmediato, (B) encender la vCSA desde vSphere Host Client (vCenter está apagado), y (C) habilitar CPU Hot Add en la VM de vCenter para que futuras ampliaciones de CPU no requieran downtime. La opción D (CPU+Memory Hot Add) no es correcta aquí porque el problema es exclusivamente de CPU; la opción correcta para el futuro es solo CPU Hot Add (C).

---
`;
