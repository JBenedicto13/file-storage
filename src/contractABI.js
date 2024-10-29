// src/contractABI.js

export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_fileName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileType",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_fileSize",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_networkHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_storageTypeId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_baseUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_storageClassId",
                "type": "uint256"
            }
        ],
        "name": "addFile",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addStorageClass",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addStorageNetwork",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fileId",
                "type": "uint256"
            }
        ],
        "name": "deleteFile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fileId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fileName",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "storageTypeId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "contentHash",
                "type": "bytes32"
            }
        ],
        "name": "FileAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fileId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "FileDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fileId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fileName",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "contentHash",
                "type": "bytes32"
            }
        ],
        "name": "FileUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "StorageClassAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "name": "StorageClassUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "StorageNetworkAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "name": "StorageNetworkUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fileId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_fileName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileType",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_fileSize",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_networkHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_storageTypeId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_baseUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_storageClassId",
                "type": "uint256"
            }
        ],
        "name": "updateFile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isActive",
                "type": "bool"
            }
        ],
        "name": "updateStorageClass",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isActive",
                "type": "bool"
            }
        ],
        "name": "updateStorageNetwork",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "contentHashToFileId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fileCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "files",
        "outputs": [
            {
                "internalType": "string",
                "name": "fileName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fileType",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "fileSize",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "networkHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "baseUrl",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "storageTypeId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "storageClassId",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "contentHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fileId",
                "type": "uint256"
            }
        ],
        "name": "getActiveFile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "fileName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fileType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fileSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "networkHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "baseUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageTypeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageClassId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "contentHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct FileMetadataStorage.FileMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fileId",
                "type": "uint256"
            }
        ],
        "name": "getFile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "fileName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fileType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fileSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "networkHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "baseUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageTypeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageClassId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "contentHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct FileMetadataStorage.FileMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_contentHash",
                "type": "bytes32"
            }
        ],
        "name": "getFileByContentHash",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "fileName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fileType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fileSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "networkHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "baseUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageTypeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageClassId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "contentHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct FileMetadataStorage.FileMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_storageTypeId",
                "type": "uint256"
            }
        ],
        "name": "getFilesByStorageType",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fileId",
                "type": "uint256"
            }
        ],
        "name": "getInactiveFile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "fileName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fileType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fileSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "networkHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "baseUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageTypeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageClassId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "contentHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct FileMetadataStorage.FileMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getStorageClassInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedAt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FileMetadataStorage.StorageClass",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getStorageNetworkInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedAt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FileMetadataStorage.StorageNetwork",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "getUserFileCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "getUserFiles",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "storageClassCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storageClasses",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "addedAt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "storageNetworkCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storageNetworks",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "addedAt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userFiles",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
            }
        ],
        "name": "verifyByIpfsHash",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "fileName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fileType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fileSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "networkHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "baseUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageTypeId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "storageClassId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "contentHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct FileMetadataStorage.FileMetadata",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewAllStorageClasses",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedAt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FileMetadataStorage.StorageClass[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewAllStorageNetworks",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedAt",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FileMetadataStorage.StorageNetwork[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];